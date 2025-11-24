"use client";
import { useEffect, useState } from "react";

export default function AdminProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    return await res.json();
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const json = await fetchProducts();
        if (mounted) setProducts(json);
      } catch (err) {
        console.error('Failed to load products', err);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete product?')) return;
    const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      try {
        const json = await fetchProducts();
        setProducts(json);
      } catch (err) {
        console.error('Failed to reload products', err);
      }
    } else alert('Delete failed');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      <table border="1" cellPadding="8">
        <thead><tr><th>Title</th><th>Category</th><th>Price</th><th>Actions</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>
                <a href={`/admin/products/edit/${p._id}`}>Edit</a> | 
                <button onClick={() => handleDelete(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
