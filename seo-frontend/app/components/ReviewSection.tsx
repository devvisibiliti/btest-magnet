"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  id: string;
  name: string;
  role?: string;
  avatar: string; // image url/path
  text: string;
  pos: { left: string; top: string }; // percentage positions for avatars
};

const reviews: Review[] = [
//   {
//     id: "1",
//     name: "NEERAJ",
//     role: "Founder of Noizzy Box",
//     avatar: "/images/home/hand-held-metal-detector.jpg",
//     text:
//       "This is a great community! I think every young entrepreneur, whether they’ve already started a business or just have an idea, should join and learn from our experience and other people's experience on how to grow a successful brand.",
//     pos: { left: "50%", top: "70%" }, // center bottom big
//   },
  {
    id: "2",
    name: "Hand Held Metal Detector",
    // role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text:
      "MAP and MRP are pneumatically controlled neodymium permanent magnets, which have excellent size / gripping force ratio and extremely low residual magnetism",
    pos: { left: "20%", top: "50%" },
  },
  {
    id: "3",
    name: "Hand Held Metal Detector",
    // role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text:
      "MAP and MRP are pneumatically controlled neodymium permanent magnets, which have excellent size / gripping force ratio and extremely low residual magnetism",
    pos: { left: "5%", top: "40%" },
  },
  {
    id: "4",
    name: "Hand Held Metal Detector",
    // role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text:
      "MAP and MRP are pneumatically controlled neodymium permanent magnets, which have excellent size / gripping force ratio and extremely low residual magnetism",
    pos: { left: "10%", top: "80%" },
  },
  {
    id: "5",
    name: "Hand Held Metal Detector",
    // role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text:
      "MAP and MRP are pneumatically controlled neodymium permanent magnets, which have excellent size / gripping force ratio and extremely low residual magnetism",
    pos: { left: "95%", top: "40%" },
  },
  {
    id: "6",
    name: "Hand Held Metal Detector",
    // role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text:
      "MAP and MRP are pneumatically controlled neodymium permanent magnets, which have excellent size / gripping force ratio and extremely low residual magnetism",
    pos: { left: "80%", top: "50%" },
  },
  {
    id: "7",
    name: "Hand Held Metal Detector",
    // role: "Member",
    avatar: "/images/home/hand-held-metal-detector.jpg",
    text:
      "MAP and MRP are pneumatically controlled neodymium permanent magnets, which have excellent size / gripping force ratio and extremely low residual magnetism",
    pos: { left: "90%", top: "80%" },
  },
];

export default function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [isPlaying, setIsPlaying] = useState(true);
  const autoplayRef = useRef<number | null>(null);

  // autoplay (optional)
  useEffect(() => {
    // if (!isPlaying) return;

    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, []);

  // pause autoplay when user interacts
  const handleSelect = (index: number) => {
    setActiveIndex(index);
    // setIsPlaying(false);
    // if (autoplayRef.current) {
    //   window.clearInterval(autoplayRef.current);
    //   autoplayRef.current = null;
    // }
  };

  // keyboard support: left/right to navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((p) => (p - 1 + reviews.length) % reviews.length);
        // setIsPlaying(false);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((p) => (p + 1) % reviews.length);
        // setIsPlaying(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-4 md:my-20">
      <h2 className="text-3xl font-bold text-center mb-2">
        Magnetronix
      </h2>
      <p className="text-center text-lg">Here what they have to say.</p>

      <div className="relative h-[600px] md:h-[300px]">
        {/* Avatar cluster layer (absolute container) */}
        <div className="absolute inset-0">
          {reviews.map((r, i) => {
            const active = i === activeIndex;
            return (
              <button
  key={r.id}
  aria-pressed={active}
  aria-label={`Show review by ${r.name}`}
  onClick={() => handleSelect(i)}
  className="profile-button absolute flex items-center justify-center rounded-full transition-all duration-500 ease-in-out"
  style={{
    left: r.pos.left,
    top: r.pos.top,
    transform: "translate(-50%, -50%)",
    zIndex: active ? 40 : 10,
  }}
>
  <div
    className={`
      rounded-full overflow-hidden transition-all duration-500 
      ${active
        ? "w-28 h-28 md:w-32 md:h-32 scale-105 shadow-xl"
        : "w-10 h-10 md:w-16 md:h-16 opacity-80 grayscale"
      }
    `}
  >
    <img
      src={r.avatar}
      alt={r.name}
      className="object-cover w-full h-full"
    />
  </div>
</button>

            );
          })}
        </div>

        {/* Center carousel area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center gap-6 pointer-events-auto">
            {/* left chevron */}
            <button
              onClick={() =>
                setActiveIndex((p) => (p - 1 + reviews.length) % reviews.length)
              }
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-700"
              aria-label="Previous review"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg> */}
            </button>

            {/* testimonial card */}
            
<div className="flex justify-center items-center">
  <div className="bg-[lab(83.27_8.65_108.89_/_0.99)] dark:bg-white-800 rounded-lg shadow-md p-6 max-w-xl w-[85%] md:w-[80%] mx-auto">
    <div className="relative text-center mb-4">
      <blockquote className="text-base md:text-lg md:px-8">
        {reviews[activeIndex].text}
      </blockquote>
    </div>
    <div className="text-center mt-4">
      <h3 className="font-bold text-lg">{reviews[activeIndex].name}</h3>
      {reviews[activeIndex].role && (
        <p className="text-gray-600 dark:text-gray-300">
          {reviews[activeIndex].role}
        </p>
      )}
    </div>
  </div>
</div>


            {/* right chevron */}
            <button
              onClick={() => setActiveIndex((p) => (p + 1) % reviews.length)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-500"
              aria-label="Next review"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg> */}
            </button>
          </div>

          {/* small pager dots (optional) */}
          {/* <div className="flex gap-2 mt-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-3 h-2 rounded-full transition-colors ${
                  activeIndex === i ? "bg-gray-800" : "bg-gray-500"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* controls */}
      {/* <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setIsPlaying((s) => !s)}
          className="px-3 py-1 border rounded text-sm"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div> */}
    </section>
  );
}
