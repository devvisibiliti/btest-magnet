"use client";
import { useState, useEffect } from "react";
// import RichTextEditor from "@/components/RichTextEditor";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // short desc

  const [productDescription, setProductDescription] = useState(""); // ⭐ long desc

  const [price, setPrice] = useState("");

  // ⭐ Specs
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);

  const [discountPrice, setDiscountPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // ==============================================
  // Fetch Categories
  // ==============================================
  useEffect(() => {
    fetch("http://localhost:5300/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  // ==============================================
  // Upload Images
  // ==============================================
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

    setImageFile(data.urls);
    setPreview(data.urls[0]);
  };

  // ==============================================
  // Toast helper
  // ==============================================
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ==============================================
  // ⭐ Specs Handlers
  // ==============================================
  const addSpecRow = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };

  const updateSpec = (index, field, value) => {
    const copy = [...specs];
    copy[index][field] = value;
    setSpecs(copy);
  };

  const removeSpecRow = (i) => {
    setSpecs(specs.filter((_, index) => index !== i));
  };

  // ==============================================
  // Submit handler
  // ==============================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title,
      description, // short desc
      productDescription, // ⭐ long desc

      price: Number(price),
      discountPrice: discountPrice ? Number(discountPrice) : undefined,
      category,
      images: imageFile || [],
      stock: 1,

      // ⭐ only send valid rows
      specs: specs.filter((s) => s.key && s.value),
    };

    const res = await fetch("http://localhost:5300/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      showToast("Product created successfully!", "success");

      // Clear form
      setTitle("");
      setPrice("");
      setDescription("");
      setProductDescription(""); // reset long desc
      setDiscountPrice("");
      setImageFile(null);
      setPreview("");
      setCategory("");
      setSpecs([{ key: "", value: "" }]);
    } else {
      showToast("Failed to create product.", "error");
    }
  };

  // ==============================================
  // JSX
  // ==============================================
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white 
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
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

        {/* Short Description */}
        <div>
          <label className="block font-semibold mb-1">Short Description</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short product description..."
          />
        </div>

        {/* ⭐ Product Description (Long) */}
        <div>
          <label className="block font-semibold mb-1">
            Product Description (Detailed)
          </label>
          <textarea
            className="w-full border rounded px-3 py-2 h-44"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Detailed description, bullet points, etc..."
          />
          <p className="text-xs text-gray-500 mt-1">
            Supports HTML for lists, paragraphs, headings.
          </p>
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

        {/* ⭐ Specifications */}
        <div>
          <label className="block font-semibold mb-1">Specifications</label>

          <div className="border rounded p-4 space-y-3">
            {specs.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center"
              >
                <input
                  className="border rounded px-2 py-1"
                  placeholder="Label (e.g. Brand)"
                  value={row.key}
                  onChange={(e) => updateSpec(index, "key", e.target.value)}
                />

                <input
                  className="border rounded px-2 py-1"
                  placeholder="Value (e.g. MAGNATRONIX)"
                  value={row.value}
                  onChange={(e) => updateSpec(index, "value", e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => removeSpecRow(index)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addSpecRow}
              className="text-blue-600 text-sm"
            >
              + Add Specification
            </button>
          </div>
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
