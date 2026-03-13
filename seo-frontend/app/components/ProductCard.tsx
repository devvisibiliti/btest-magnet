import Link from "next/link";

type Product = {
  title: string;
  description: string;
  slug: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{  border: "1px solid #ddd", padding: "20px", width: "300px" }}>
      <h2>{product.title}</h2>
      <p>{product.description.substring(0, 70)}...</p>
      <Link href={`/products/${product.slug}`}>View Details</Link>
    </div>
  );
}
