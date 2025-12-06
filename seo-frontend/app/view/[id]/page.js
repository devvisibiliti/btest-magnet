"use client";
import { use } from "react";
import { useEffect, useState, useRef } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";
import { Navigation, Thumbs, Pagination } from "swiper/modules";

export default function ProductDetailPage({ params }) {
  const { id } = use(params);

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeSpecTab, setActiveSpecTab] = useState("specs");

  const mainImageRef = useRef(null);
  const zoomBoxRef = useRef(null);
  SwiperCore.use([Navigation, Thumbs, Pagination]);

  // ----------------------------------------------------
  // 1. Fetch Product
  // ----------------------------------------------------
  useEffect(() => {
    fetch(`http://localhost:5300/api/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setProduct(data);

        // Fetch related
        if (data?.category) {
          fetch(
            `http://localhost:5300/api/products?category=${encodeURIComponent(
              data.category
            )}`
          )
            .then((r) => r.json())
            .then((list) => {
              setRelated(list.filter((p) => p._id !== id).slice(0, 8));
            });
        }
      });
  }, [id]);

  if (!product) return <div className="text-center p-20">Loading...</div>;

  // ----------------------------------------------------
  // 2. Zoom Handler
  // ----------------------------------------------------
  const handleZoomMove = (e) => {
    const box = mainImageRef.current;
    const zoom = zoomBoxRef.current;

    if (!box || !zoom) return;

    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    zoom.style.backgroundPosition = `${px}% ${py}%`;
  };

  // ----------------------------------------------------
  // 3. Add to Cart
  // ----------------------------------------------------
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const exists = cart.find((i) => i._id === product._id);

    if (exists) exists.qty += qty;
    else cart.push({ ...product, qty });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  // ----------------------------------------------------
  // 4. Buy Now
  // ----------------------------------------------------
  const buyNow = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    const msg = `I want to buy ${product.title} (Qty: ${qty})`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  };

  // ----------------------------------------------------
  // 5. Rating
  // ----------------------------------------------------
  const avgRating =
    product.reviews?.length > 0
      ? product.reviews.reduce((t, r) => t + r.rating, 0) /
        product.reviews.length
      : 0;

  const Stars = ({ value }) => {
    const arr = [];
    for (let i = 1; i <= 5; i++) {
      if (value >= i) arr.push(<FaStar key={i} className="text-yellow-500" />);
      else if (value >= i - 0.5)
        arr.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      else arr.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
    return <span className="flex gap-1">{arr}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* ----------------------------------------------------
        BREADCRUMB
      ---------------------------------------------------- */}
      <div className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        /{" "}
        <a
          href={`/category/${product.category}`}
          className="hover:underline"
        >
          {product.category}
        </a>{" "}
        / <span className="text-black">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ----------------------------------------------------
          LEFT SECTION (Images)
        ---------------------------------------------------- */}
        <div className="lg:col-span-7">
          {/* Main image + zoom */}
          <div
            className="relative border rounded-lg bg-white p-4"
            ref={mainImageRef}
            onMouseMove={handleZoomMove}
            onMouseEnter={() => (zoomBoxRef.current.style.opacity = 1)}
            onMouseLeave={() => (zoomBoxRef.current.style.opacity = 0)}
          >
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              navigation
              pagination={{ clickable: true }}
            >
              {product?.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className="w-full h-[450px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Zoom Box */}
            <div
              ref={zoomBoxRef}
              className="absolute top-4 right-4 w-40 h-40 border bg-white bg-no-repeat bg-contain opacity-0 transition"
              style={{
                backgroundImage: `url(${product?.images?.[0]})`,
              }}
            ></div>
          </div>

          {/* Thumbs */}
          <div className="mt-3">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={5}
              spaceBetween={10}
            >
              {product?.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className="w-full h-20 object-contain border p-1 rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ----------------------------------------------------
            SPECIFICATIONS & TAGS
          ---------------------------------------------------- */}
          <div className="mt-6 bg-white p-5 rounded shadow">
            <div className="flex gap-6 border-b pb-3">
              <button
                className={`pb-2 ${
                  activeSpecTab === "specs"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => setActiveSpecTab("specs")}
              >
                Specifications
              </button>

              <button
  className={`pb-2 ${
    activeSpecTab === "description"
      ? "border-b-2 border-blue-500"
      : ""
  }`}
  onClick={() => setActiveSpecTab("description")}
>
  Description
</button>

            </div>

            {/* ⭐ Specifications Table */}
{activeSpecTab === "specs" ? (
  // ⭐ Specifications Table
  <div className="mt-4 text-sm">
    {product.specs?.length > 0 ? (
      <table className="w-full">
        <tbody>
          {product.specs.map((row, i) => (
            <tr key={i} className="border-b">
              <td className="py-2 font-medium w-1/2">{row.key}</td>
              <td className="py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="text-gray-500 mt-2">No specifications added</p>
    )}
  </div>
) : (
  // ⭐ Description Tab
 <div className="mt-6 bg-white p-5 rounded shadow">
  <h3 className="text-lg font-semibold mb-3">Product Description</h3>

  {product.productDescription ? (
    <div
      className="prose prose-sm max-w-none"
      dangerouslySetInnerHTML={{ __html: product.productDescription }}
    />
  ) : (
    <p className="text-gray-500">No description available</p>
  )}
</div>

)}


          </div>

          {/* ----------------------------------------------------
            REVIEWS
          ---------------------------------------------------- */}
          <div className="mt-6 bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">{avgRating.toFixed(1)}</span>
              <Stars value={avgRating} />
              <span className="text-gray-500 text-sm">
                ({product?.reviews?.length})
              </span>
            </div>

            <div className="mt-4">
              {product?.reviews?.length ? (
                product?.reviews?.map((r, i) => (
                  <div key={i} className="border-t pt-4 mt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">{r.name}</span>
                      <span className="text-gray-500 text-sm">
                        {new Date(r.date).toLocaleDateString()}
                      </span>
                    </div>
                    <Stars value={r.rating} />
                    <p className="mt-1">{r.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------
          RIGHT SECTION (Product Info)
        ---------------------------------------------------- */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <h1 className="text-2xl font-semibold">{product.title}</h1>

              {/* SHARE BUTTONS */}
              <div className="flex gap-3 mt-3 text-sm">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined"
                      ? window.location.href
                      : ""
                  )}`}
                  target="_blank"
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Facebook
                </a>

                {/* <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    typeof window !== "undefined"
                      ? window.location.href
                      : ""
                  )}&text=${encodeURIComponent(product.title)}`}
                  target="_blank"
                  className="px-3 py-1 bg-sky-500 text-white rounded"
                >
                  Twitter
                </a> */}

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    product.title +
                      " " +
                      (typeof window !== "undefined"
                        ? window.location.href
                        : "")
                  )}`}
                  target="_blank"
                  className="px-3 py-1 bg-green-600 text-white rounded"
                >
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl font-bold text-red-600">
                  ₹{product.price}
                </span>
                {product.discountPrice && (
                  <span className="text-gray-500 line-through">
                    ₹{product.discountPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mt-3">{product.description}</p>

              {/* QTY */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  -
                </button>
                <span>{qty}</span>
                <button
                  className="px-4 py-2 bg-gray-200 rounded"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </button>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={buyNow}
                  className="flex-1 bg-orange-600 text-white py-3 rounded font-semibold"
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div className="bg-white p-5 rounded shadow text-sm">
              <h4 className="font-semibold">Sold by</h4>
              <p className="text-gray-700 mt-1">Magnetronix Official Store</p>
              <p className="text-gray-500 mt-2">
                Free Delivery • Easy Returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
        RELATED PRODUCTS
      ---------------------------------------------------- */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>

        {related.length > 0 ? (
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {related.map((p) => (
              <SwiperSlide key={p._id}>
                <a
                  href={`/product/${p.slug}`}
                  className="block bg-white p-4 rounded shadow"
                >
                  <img
                    src={p.images?.[0]}
                    className="w-full h-40 object-contain"
                  />
                  <p className="font-medium text-sm mt-2">{p.title}</p>
                  <p className="font-semibold">₹{p.price}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No related products found.</p>
        )}
      </div>

      {/* ----------------------------------------------------
        MOBILE ONLY STICKY BOTTOM BAR
      ---------------------------------------------------- */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-3 flex items-center justify-between md:hidden z-50">
        <div>
          <div className="text-lg font-bold text-red-600">
            ₹{product.price}
          </div>
          {product.discountPrice && (
            <div className="text-xs text-gray-400 line-through">
              ₹{product.discountPrice}
            </div>
          )}
        </div>

        <div className="flex items-center border rounded mx-3">
          <button
            className="px-3 py-1 bg-gray-200"
            onClick={() => setQty(Math.max(1, qty - 1))}
          >
            -
          </button>
          <div className="px-4">{qty}</div>
          <button
            className="px-3 py-1 bg-gray-200"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>

        <button
          onClick={addToCart}
          className="bg-yellow-500 px-4 py-2 rounded text-sm font-semibold"
        >
          Add
        </button>

        <button
          onClick={buyNow}
          className="bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
