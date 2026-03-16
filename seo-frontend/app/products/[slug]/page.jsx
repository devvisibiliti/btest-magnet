import ProductDetails from "../../components/SingleProductCard";

async function getProduct(slug) {

  const res = await fetch(
    `http://localhost:5300/api/singleproduct/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductPage({ params }) {

  const { slug } = await params;

  const product = await getProduct(slug);

  return <ProductDetails product={product} />;
}