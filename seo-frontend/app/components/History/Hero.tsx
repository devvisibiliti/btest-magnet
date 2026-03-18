"use client";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden flex items-center justify-center text-white">
      {/* Parallax Image */}
      <img
        src="/history-bg.jpg"
        className="absolute w-full h-[120%] object-cover"
        style={{
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">HISTORY</h1>
        <p className="mt-4 max-w-xl mx-auto text-sm md:text-lg">
          In our 50-year journey, we grew from a small workshop into a leading
          manufacturing company.
        </p>
      </div>
    </div>
  );
};

export default Hero;