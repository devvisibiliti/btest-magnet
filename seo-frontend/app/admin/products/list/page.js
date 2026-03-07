"use client";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"
import Link from "next/link";

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const router = useRouter()

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5300/api/products");
    return await res.json();
  };

  useEffect(() => {
    (async () => {
      try {
        const json = await fetchProducts();
        setProducts(json);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete product?")) return;

    const res = await fetch(
      `http://localhost:5300/api/products/${id}`,
      { method: "DELETE" } // ✅ FIXED BUG (was slug)
    );

    if (res.ok) {
      const updated = await fetchProducts();
      setProducts(updated);
    } else {
      alert("Delete failed");
    }
  };
console.log(products);

  return (
    <div className="admin-container">
     <div className="container flex gap-20">
  <h1 className="admin-title">Product List</h1>
  <button className="edit-btn mb-10"onClick={()=>router.push("/admin/products/add")}>Add New Product</button>
</div>
      

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td className="action-cell">
                  <Link className="edit-btn" href={`/admin/products/edit/${p._id}`}>
                    Edit
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(p._id)}>
                    

                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
