import React, { useRef } from "react";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface PostForm {
  title: string;
  description: string; // HTML from React Quill
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

  const CLOUD_NAME = "djd5oi6b1";
  const UPLOAD_PRESET = "blog_unsigned";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const quillRef = useRef(null);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  // --------------------------
  // CLOUDINARY IMAGE UPLOAD
  // --------------------------
  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url; // this is the image URL
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let imageUrl = "";

      if (image) {
        imageUrl = await uploadToCloudinary(image);
      }

      const response = await fetch("http://localhost:5300/api/gp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: form.title,
          description: form.description, // HTML from Quill editor
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

  // --------------------------
  // REACT QUILL TOOLBAR SETTINGS
  // --------------------------
  const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  },
};



 const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
  "image",
];

  return (
    <div style={{ maxWidth: "650px", margin: "auto" }}>
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

        {/* ---------------------------- */}
        {/*  REACT QUILL EDITOR HERE     */}
        {/* ---------------------------- */}
        <div style={{ marginBottom: "20px" }}>
  <ReactQuill
    ref={quillRef}
    theme="snow"
    value={form.description}
    onChange={(value) => setForm({ ...form, description: value })}
    modules={modules}
    formats={formats}
    style={{ height: "250px", marginBottom: "40px" }}
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
        <p
          style={{
            marginTop: "10px",
            color: message.includes("success") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Create;
