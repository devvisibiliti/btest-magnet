import Image from 'next/image';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:5300/api/gp/${params.slug}`);
  const product = await res.json();

  return {
    title: product.title,
    description: product.metaDescription || product.title,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:5300/api/gp/${params.slug}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={400}
        height={400}
        style={{ maxWidth: "400px", margin: "20px 0" }}
      />

      <div
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </div>
  );
}
