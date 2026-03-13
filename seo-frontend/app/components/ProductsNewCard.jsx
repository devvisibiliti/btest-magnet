import Image from "next/image";

export default function ProductsNewCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        background: "#fff"
      }}
    >
      <Image
  src={product.image}
  width={300}
  height={200}
  alt={product.title}
  style={{ objectFit: "cover", width: "100%", height: "200px" }}
/>

      <h3>{product.title}</h3>

      <p>{product.description.substring(0, 40)}...</p>

      <button
        style={{
          padding: "8px 12px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        View Product
      </button>
    </div>
  );
}