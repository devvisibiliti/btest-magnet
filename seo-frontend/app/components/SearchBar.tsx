"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/navigation";

type Product = {
  _id: string;
  title: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [showAnimation, setShowAnimation] = useState(true);
  const router = useRouter()

  // 🔹 Helper function to trim text to 10 characters
  const trimText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  // 🔥 Fetch product titles for typing animation
  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const res = await fetch("http://localhost:5300/api/products");
        const data = await res.json();

        const onlyTitles = data.map((p: Product) =>
          trimText(p.title, 15)
        );

        setTitles(onlyTitles.slice(0, 5)); // use first 5
      } catch (error) {
        console.error("Failed to fetch titles:", error);
      }
    };

    fetchTitles();
  }, []);


  // 🔥 Handle Search
  const handleSearch = async (value: string) => {
    setQuery(value);

    // Hide animation when typing
    setShowAnimation(value.length === 0);

    if (value.length > 1) {
      try {
        const res = await fetch(
          `http://localhost:5300/api/products/search?query=${value}`
        );
        const data: Product[] = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-80">
      <div className="relative">
        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="border p-2 pl-3 w-full relative bg-transparent rounded-md"
        />

        {/* 🔥 Typing Animation Overlay */}
        {showAnimation && titles.length > 0 && (
          <div className="absolute left-3 top-2 text-gray-400 pointer-events-none">
            <TypeAnimation
              sequence={[
                ...titles.flatMap((title) => [` "${title}"`, 2000]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        )}
      </div>
      {/* 🔥 Dropdown Results */}
      {results.length > 0 && (
        <div className="absolute z-50 bg-white shadow-lg w-full border mt-1 max-h-60 overflow-y-auto rounded-md">
          {results.map((item) => (
            <div
              key={item._id}
              onClick={()=>router.push(`/products/${item._id}`)}

              className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-none"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}