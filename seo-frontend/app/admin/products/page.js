import Link from 'next/link';

export default async function ProductsPage() {
  const res = await fetch('http://localhost:5300/api/products', { cache: 'no-store' });
  const products = await res.json();

  // group by category
  const grouped = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div style={{ padding:20 }}>
      <h1>Products</h1>
      {Object.keys(grouped).map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {grouped[cat].map(p => (
              <div key={p._id} style={{ border:'1px solid #ddd', padding:10, width:200 }}>
                <img src={p.images?.[0]} alt="" style={{ width:'100%', height:120, objectFit:'cover' }} />
                <h3>{p.title}</h3>
                <p>₹{p.price}</p>
                <Link href={`admin/products/view/${p.slug}`}>View</Link>
              </div>
            ))}
          </div>
          <Link href={`/products/${encodeURIComponent(cat)}`}>See all {cat}</Link>
        </div>
      ))}
    </div>
  );
}
