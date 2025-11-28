"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();

  // ✅ Provide default structure — prevents ALL errors
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    images: [],
  });

  const [loading, setLoading] = useState(true);

  // Load product by ID
  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5300/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setProduct({
          title: data.title ?? "",
          description: data.description ?? "",
          price: data.price ?? "",
          discountPrice: data.discountPrice ?? "",
          images: data.images ?? [],
        });
        setLoading(false);
      });
  }, [id]);

  // Handle multi-image upload
  const handleImageUpload = async (e) => {
  const files = Array.from(e.target.files);

  const formData = new FormData();
  files.forEach((file) => formData.append("images", file));

  const res = await fetch("http://localhost:5300/api/upload/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json(); // { urls: [...] }

  setProduct((prev) => ({
    ...prev,
    images: [...prev.images, ...data.urls]
  }));
};


  // Remove image
  const removeImage = (index) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // Save handler
  const handleSave = async () => {
    const res = await fetch(`http://localhost:5300/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      alert("Product Updated Successfully!");
      router.push("/admin/products/list");
    } else {
      alert("Save failed");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
      <Card sx={{ p: 3, boxShadow: 4 }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Edit Product
        </Typography>

        <CardContent>
          <Grid container spacing={3}>
            {/* Title */}
            <Grid item xs={12}>
              <TextField
                label="Product Title"
                fullWidth
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                minRows={3}
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
              />
            </Grid>

            {/* Price */}
            <Grid item xs={6}>
              <TextField
                label="Price (₹)"
                type="number"
                fullWidth
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: Number(e.target.value) })
                }
              />
            </Grid>

            {/* Discount Price */}
            <Grid item xs={6}>
              <TextField
                label="Discount Price (₹)"
                type="number"
                fullWidth
                value={product.discountPrice}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    discountPrice: Number(e.target.value),
                  })
                }
              />
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" mb={1}>
                Product Images
              </Typography>

              <Box
                sx={{
                  border: "2px dashed #bbb",
                  borderRadius: 2,
                  padding: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  background: "#fafafa",
                }}
                onClick={() => document.getElementById("upload-input").click()}
              >
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={handleImageUpload}
                />
                <Typography variant="body2" color="textSecondary">
                  Click to upload images or drag & drop
                </Typography>
              </Box>

              {/* PREVIEW GRID */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  mt: 2,
                }}
              >
                {product.images.map((img, index) => (
                  <Box key={index} sx={{ position: "relative" }}>
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: 120,
                        height: 120,
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "1px solid #ddd",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Save Button */}
            <Grid item xs={12} mt={2}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleSave}
                sx={{
                  py: 1.5,
                  fontSize: "16px",
                  backgroundColor: "#1976d2",
                }}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
