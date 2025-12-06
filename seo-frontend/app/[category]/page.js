"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category } = useParams(); // ✅ FIX: get params in client component
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      if (!category) return;

      const res = await fetch(
        `http://localhost:5300/api/products?category=${encodeURIComponent(
          category
        )}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      setProducts(data);
    }
    load();
  }, [category]);

  return (
    <div className="amazon-container">
      <h1 className="amazon-heading">{category}</h1>

      <div className="amazon-grid">
        {products.map((p) => (
          <div key={p._id} className="amazon-card">
            <img src={p.images?.[0]} className="amazon-image" alt="" />

            <div className="amazon-info">
              <h3 className="amazon-title">{p.title}</h3>

              <p className="amazon-price">
                <span className="currency">₹</span>
                {p.price}
              </p>

              <Link href={`/admin/products/view/${p._id}`} className="amazon-button">
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
