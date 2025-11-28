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
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5300/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

const handleImageUpload = async (e) => {
  const files = e.target.files;
  const formData = new FormData();

  for (let f of files) {
    formData.append("images", f);
  }

  const res = await fetch("http://localhost:5300/api/upload/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  // data.urls = [cloudinary_url1, cloudinary_url2...]

  setImageFile(data.urls); // store URLs
  setPreview(data.urls[0]); // show first preview
};


  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // let imageUrl = null;
    // if (imageFile) imageUrl = await handleImageUpload(imageFile);

    const payload = {
      title,
      description,
      price: Number(price),
      discountPrice: discountPrice ? Number(discountPrice) : undefined,
      category,
      images: imageFile || [],
      stock: 1,
    };

    const res = await fetch("http://localhost:5300/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      showToast("Product created successfully!", "success");
      setTitle("");
      setPrice("");
      setDescription("");
      setDiscountPrice("");
      setImageFile(null);
      setPreview("");
    } else {
      showToast("Failed to create product.", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white 
          ${
            toast.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {toast.msg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-5"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-28"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short product description..."
          />
        </div>

        {/* Price Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Discount Price</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={discountPrice}
              type="number"
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map((c) => (
              <option key={c._id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-1">Product Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition">
            <input
  id="upload"
  type="file"
  multiple
  className="hidden"
  onChange={handleImageUpload}
/>

            <label
              htmlFor="upload"
              className="cursor-pointer text-blue-600 font-semibold"
            >
              Click to upload image
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                className="w-40 h-40 object-cover rounded shadow"
                alt="preview"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white font-semibold rounded 
          ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} 
          transition`}
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
