import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// Firebase imports
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";   // <-- make sure this path is correct

interface PostForm {
  title: string;
  description: string;
}

interface ApiResponse {
  message?: string;
  [key: string]: unknown;
}

function Create() {
  const [form, setForm] = useState<PostForm>({ title: "", description: "" });
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("http://localhost:5300/ad/verify", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) navigate("/login");
      } catch {
        navigate("/login");
      }
    }
    checkAuth();
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let imageUrl = "";

      // 1️⃣ Upload image to Firebase
      if (image) {
        const imgRef = ref(storage, `posts/${Date.now()}-${image.name}`);
        await uploadBytes(imgRef, image);
        imageUrl = await getDownloadURL(imgRef);
      }

      // 2️⃣ Send data to backend (NO multer needed)
      const response = await fetch("http://localhost:5300/api/gp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },  // sending JSON now
        credentials: "include",
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          imageUrl,
        }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Failed to create");
        setLoading(false);
        return;
      }

      setMessage("Created successfully");
      setForm({ title: "", description: "" });
      setImage(null);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setMessage("Network error, try again");
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", minHeight: "100px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input type="file" name="image" onChange={handleImage} />
        </div>

        <button type="submit" disabled={loading} style={{ padding: "10px 20px" }}>
          {loading ? "Creating..." : "Create"}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "10px", color: message.includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Create;
