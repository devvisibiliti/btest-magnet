import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

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
  const [image, setImage] = useState<File | null>(null)
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("http://localhost:5300/ad/verify", {
          method: "GET",
          credentials: "include", // send cookies if auth uses them
        });

        if (!response.ok) {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    }
    checkAuth();
  }, [navigate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e:ChangeEvent<HTMLInputElement>)=>{
    setImage(e.target.files ? e.target.files[0]:null)

  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData()
      formData.append("title",form.title)
      formData.append("description", form.description)
      if(image) formData.append("image", image)
      const response = await fetch("http://localhost:5300/api/gp", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        credentials: "include", // include cookies if your server uses auth cookies
        body: formData,
      });

      const data: ApiResponse = await response.json();

if (!response.ok) {
    setMessage(data.message || "Failed to create");
    setLoading(false);
    return;
}

   
      setMessage(data.message || "Created successfully");
      setForm({ title: "", description: "" });
      setImage(null);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setMessage("Network error, please try again");
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



// import { useState, useEffect } from "react";
// import type { ChangeEvent, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// // import api from "../api";

// interface PostForm {
//   title: string;
//   description: string;
// }

// function Create() {
//   const [form, setForm] = useState<PostForm>({ title: "", description: "" });
//   const [message, setMessage] = useState<string>("");
//   const navigate = useNavigate();

//   // Check authentication on component mount
//   useEffect(() => {
//     async function checkAuth() {
//       try {
//         await api.get("/check");
//       } catch {
//         navigate("/login");
//       }
//     }
//     checkAuth();
//   }, [navigate]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/create", form);
//       setMessage(res.data.message);
//       setForm({ title: "", description: "" });
//     } catch (err: any) {
//       setMessage(err.response?.data?.message || "Failed to create");
//     }
//   };

//   return (
//     <div>
//       <h2>Create Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="title" placeholder="Title" onChange={handleChange} value={form.title} />
//         <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} />
//         <button type="submit">Create</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Create;




// const handleLogout = async () => {
//   await api.post("/logout");
//   localStorage.removeItem("user");
//   navigate("/login");
// };

// import jwt from "jsonwebtoken";

// export function verifyAuth(req, res, next) {
//   try {
//     const token = req.cookies.auth;
//     if (!token) return res.status(401).json({ message: "Not logged in" });
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ message: "Invalid token" });
//   }
// }

// app.post("/create", verifyAuth, async (req, res) => {
//   const { title, description } = req.body;
//   // Save to DB
//   res.status(200).json({ message: "Created successfully" });
// });
