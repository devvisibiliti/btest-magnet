"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Mohan",
    role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text: "Amazing learning and networking — monthly progress has been real and measurable.",
  },
  {
    id: 2,
    name: "Sultan",
    role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text: "The mentorship and critique here helped us refine our product-market fit quickly.",
  },
  {
    id: 3,
    name: "Ragapriya",
    role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text: "A place where practical feedback and encouragement meet — highly recommended.",
  },
];

export default function AnimatedReviewSection() {
  const [active, setActive] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  // Auto-play
  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(autoplayRef.current!);
  }, []);

  return (
    <section className="py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
      <p className="text-gray-600 mb-10">Real feedback from our community</p>

      {/* Review Card */}
      <div className="relative px-4">
        <div
          key={active}
          className="
            bg-[#3B281E] shadow-xl rounded-xl p-8 mx-auto max-w-xl
            transition-all duration-700
            animate-fadeInUp
          "
        >
          <p className="text-white text-lg italic mb-6">{reviews[active].text}</p>

          <div className="flex text-white items-center justify-center gap-4">
            <img
              src={reviews[active].avatar}
              alt={reviews[active].name}
              className="
                w-16 h-16 rounded-full object-cover shadow-md
                border-4 border-blue-500
                animate-scaleUp
              "
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold">{reviews[active].name}</h3>
              {/* <p className="text-white text-sm">{reviews[active].role}</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Selector */}
      <div className="flex justify-center gap-6 mt-10">
        {reviews.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setActive(i)}
            className="group flex flex-col items-center"
          >
            <div
              className={`
                w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300
                ${active === i ? "scale-110 border-blue-500 shadow-xl" : "opacity-60 hover:opacity-100"}
              `}
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className={`text-sm mt-2 transition-opacity ${
                active === i ? "opacity-100" : "opacity-50 group-hover:opacity-100"
              }`}
            >
              {r.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
