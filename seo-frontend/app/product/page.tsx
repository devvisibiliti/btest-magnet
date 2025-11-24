import ProductCard from "../components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:5300/api/gp", {
    cache: "no-store",
  });
  return res.json();
}

export const metadata = {
  title: "Products | Your Brand",
  description: "Browse our latest products.",
};

type Product = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  // add other product properties as needed
};

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 && <p>No products available.</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
