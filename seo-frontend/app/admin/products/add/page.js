"use client";
import { useState, useEffect } from "react";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then(r => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    // use unsigned preset for client uploads:
    data.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_PRESET);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD}/image/upload`, {
      method: 'POST',
      body: data
    });
    const json = await res.json();
    return json.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = null;
    if (imageFile) imageUrl = await uploadToCloudinary(imageFile);

    const payload = {
      title,
      description,
      price: Number(price),
      discountPrice: discountPrice ? Number(discountPrice) : undefined,
      category,
      images: imageUrl ? [imageUrl] : [],
      stock: 1
    };

    const res = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Product added');
      setTitle(''); setPrice(''); setDescription(''); setImageFile(null); setPreview('');
    } else {
      alert('Failed to add product');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <br />
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <br />
        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" required />
        <br />
        <input value={discountPrice} onChange={e => setDiscountPrice(e.target.value)} placeholder="Discount Price" type="number" />
        <br />
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="">-- Choose category --</option>
          {categories.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
        </select>
        <br />
        <input type="file" onChange={e => {
          const f = e.target.files?.[0];
          setImageFile(f);
          if (f) setPreview(URL.createObjectURL(f));
        }} />
        <br />
        {preview && <img src={preview} width={160} alt="preview" />}
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
