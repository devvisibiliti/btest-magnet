"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductDetail({ params }) {
  const { slug } = params;
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  // fetch product client-side (could also use server component)
  useState(() => {
    fetch(`http://localhost:5000/api/products/slug/${slug}`)
      .then(r => r.json())
      .then(setProduct)
      .catch(() => {});
  });

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.find(i => i._id === product._id);
    if (exists) exists.qty += qty;
    else cart.push({ ...product, qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  const buyNow = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.ADMIN_WHATSAPP_NUMBER;
    const message = `I want to buy: ${product.title} (qty: ${qty})`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ padding:20 }}>
      <h1>{product.title}</h1>
      <img src={product.images?.[0]} alt="" style={{ width:300 }} />
      <p>{product.description}</p>
      <p>Price: ₹{product.price} {product.discountPrice && <span> (Discount ₹{product.discountPrice})</span>}</p>
      <p>Stock: {product.stock}</p>

      <div>
        <button onClick={() => setQty(Math.max(1, qty-1))}>-</button>
        <span style={{ margin: '0 8px' }}>{qty}</span>
        <button onClick={() => setQty(qty+1)}>+</button>
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={buyNow} style={{ marginLeft: 8 }}>Buy Now</button>
      </div>

      <h3>Reviews</h3>
      {product.reviews && product.reviews.length ? product.reviews.map((r, idx) => (
        <div key={idx} style={{ borderTop: '1px solid #eee', paddingTop:8 }}>
          <strong>{r.name}</strong> — {r.rating}/5
          <p>{r.comment}</p>
        </div>
      )) : <p>No reviews yet</p>}
    </div>
  );
}
