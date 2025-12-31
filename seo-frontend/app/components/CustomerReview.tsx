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
    avatar: "/images/reviews/image3.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Sultan",
    role: "Member",
    avatar: "/images/reviews/image2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Ragapriya",
    role: "Member",
    avatar: "/images/reviews/image5.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    name: "Raju",
    role: "Member",
    avatar: "/images/reviews/image4.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    name: "Kathir",
    role: "Member",
    avatar: "/images/reviews/image1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      <h2 className="text-3xl font-bold mb-2">What Our Clients Says About Magnetronix</h2>
      <p className="text-gray-600 mb-10">Real feedback from our Clients</p>

      {/* Review Card */}
      <div className="relative px-4 cols-6">
        <div
          key={active}
          className="
            bg-[#3B281E] shadow-xl rounded-xl p-8 mx-auto max-w-4xl
            min-h-[350px]
            transition-all duration-700
            animate-fadeInUp
          "
        >
          <p className="text-white text-lg italic mb-6">{reviews[active].text}</p>

          <div className="flex text-white-500 items-center justify-center gap-4">
            <img
              src={reviews[active].avatar}
              alt={reviews[active].name}
              className="text-green-500
                w-16 h-16 rounded-full object-cover shadow-md
                border-4 border-blue-500
                animate-scaleUp
              "/>

            <div className="text-left">
              <h3 className="text-xl text-white font-semibold">{reviews[active].name}</h3>
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
                className="w-full h-full object-cover"/>
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
