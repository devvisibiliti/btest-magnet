// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function ProductsPage() {
//   const [products, setProducts] = useState([]);

//   // FETCH PRODUCTS (client side)
//   useEffect(() => {
//     fetch("http://localhost:5300/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("PRODUCT FETCH ERROR:", err));
//   }, []);

//   // Group by category
//   const grouped = products.reduce((acc, p) => {
//     acc[p.category] = acc[p.category] || [];
//     acc[p.category].push(p);
//     return acc;
//   }, {});

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-semibold mb-8">Products</h1>

//       {Object.keys(grouped).map((cat) => (
//         <div key={cat} className="mb-14">

//           {/* Category Header */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold capitalize">{cat}</h2>

//             <Link
//               className="text-blue-600 hover:underline text-sm"
//               href={`/products/${encodeURIComponent(cat)}`}
//             >
//               See all {cat} →
//             </Link>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
//             {grouped[cat].map((p) => (
//               <div
//                 key={p._id}
//                 className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition p-4"
//               >
//                 {/* Product Image */}
//                 <Link href={`/admin/products/view/${p._id}`}>
//                   <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center">
//                     <img
//                       src={p.images?.[0] || "https://via.placeholder.com/300?text=No+Image"}
//                       alt={p.title}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </Link>

//                 {/* Title */}
//                 <Link href={`/admin/products/view/${p._id}`}>
//                   <h3 className="text-sm font-medium line-clamp-2 hover:underline mt-2">
//                     {p.title}
//                   </h3>
//                 </Link>

//                 {/* Price */}
//                 <p className="text-lg font-semibold text-red-600 mt-2">
//                   ₹{p.price}
//                 </p>

//                 {/* Buttons */}
//                 <div className="mt-3 flex gap-2">
//                   <Link
//                     href={`/admin/products/view/${p._id}`}
//                     className="flex-1 bg-yellow-400 text-black py-1.5 rounded text-center text-sm hover:bg-yellow-500"
//                   >
//                     View
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
