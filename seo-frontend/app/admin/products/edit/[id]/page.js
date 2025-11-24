"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProduct({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products`)
      .then(r => r.json())
      .then(list => {
        const p = list.find(x => x._id === id);
        setProduct(p);
      });
  }, [id]);

  const handleSave = async () => {
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(product)
    });
    if (res.ok) {
      alert('Saved');
      router.push('/admin/products/list');
    } else alert('Save failed');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding:20 }}>
      <h1>Edit Product</h1>
      <input value={product.title} onChange={e=>setProduct({...product, title: e.target.value})} />
      <br />
      <textarea value={product.description} onChange={e=>setProduct({...product, description: e.target.value})} />
      <br />
      <input type="number" value={product.price} onChange={e=>setProduct({...product, price: Number(e.target.value)})} />
      <br />
      <input type="number" value={product.discountPrice || ''} onChange={e=>setProduct({...product, discountPrice: Number(e.target.value)})} />
      <br />
      <input value={product.category} onChange={e=>setProduct({...product, category: e.target.value})} />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
