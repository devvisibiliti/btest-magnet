import ProductDetails from "@/components/ProductDetails";

async function getProduct(slug) {

  const res = await fetch(
    `http://localhost:5300/api/products/${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return data;
}

export default async function ProductPage({ params }) {

  const product = await getProduct(params.slug);

  return <ProductDetails product={product} />;
}