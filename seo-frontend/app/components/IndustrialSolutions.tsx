"use client";

import Link from "next/link";

export default function SesotecCTA() {
  return (
    <section className="relative w-full h-screen">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/invideo-ai-1080 See Your Tech Do More in 15 Seconds 2025-11-21.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Ready for <span className="text-white">#NextLevelInnovations?</span>
        </h1>

        <Link
          href="/en/next-level-innovations"
          className="
            bg-blue-600 
            hover:bg-blue-700
            text-white 
            font-semibold 
            px-8 
            py-3 
            rounded 
            text-lg 
            transition
          "
        >
          Learn more
        </Link>

      </div>
    </section>
  );
}
