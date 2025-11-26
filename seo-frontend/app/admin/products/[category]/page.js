import Link from 'next/link';

export default async function CategoryPage({ params }) {
  const category = params.category;
  const res = await fetch(`http://localhost:5300/api/products?category=${encodeURIComponent(category)}`, { cache: 'no-store' });
  const products = await res.json();

  return (
    <div style={{ padding:20 }}>
      <h1>{category}</h1>
      <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
        {products.map(p => (
          <div key={p._id} style={{ border:'1px solid #ddd', padding:10, width:220 }}>
            <img src={p.images?.[0]} alt="" style={{ width:'100%', height:120, objectFit:'cover' }} />
            <h3>{p.title}</h3>
            <p>₹{p.price}</p>
            <Link href={`/products/view/${p.slug}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
