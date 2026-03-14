import Link from "next/link";
import Image from "next/image";

export default function ProductsNewCard({ product }) {
  return (
    <div className="border rounded-lg p-4 text-center bg-white shadow-sm">

      <Image
        src={product.imageUrl}
        width={300}
        height={200}
        alt={product.title}
        className="w-full h-[200px] object-cover rounded"
      />

      <h3 className="mt-4 font-semibold text-lg">
        {product.title}
      </h3>

      <Link href={`/products/${product.slug}`}>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded">
          View Product
        </button>
      </Link>

    </div>
  );
}