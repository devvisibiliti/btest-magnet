"use client";

import { useState, useRef, useEffect } from "react";

export default function Faq1() {
  const [openId, setOpenId] = useState<number | null>(null);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const faqs = [
    {
      id: 1,
      question: "test title ",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img:"/images/home/hand-held-metal-detector.jpg"  
    },
    {
      id: 2,
      question: "test title",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img:"/images/home/hand-held-metal-detector.jpg"
    },
    {
      id: 3,
      question: "test title",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      question: "test title",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      question: "test title",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      question: "test title",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      question: "test title",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Animate height on open/close
  useEffect(() => {
    Object.keys(contentRefs.current).forEach((id) => {
      const numericId = Number(id);
      const content = contentRefs.current[numericId];
      if (!content) return;

      if (openId === numericId) {
        const scrollHeight = content.scrollHeight;
        content.style.maxHeight = scrollHeight + "px";
        content.style.opacity = "1";
      } else {
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
      }
    });
  }, [openId]);

  return (
    <section className="w-full md:w-4/5 lg:w-[77%] mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Client Reviews</h2>

      {faqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className="border-2 rounded-xl mb-6 overflow-hidden transition-colors 
            shadow-[2px_2px_8px_rgba(0,0,0,0.1)] border-gray-200"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full text-left p-4 flex justify-between items-center 
              bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg md:text-2xl font-medium">
                {faq.question}
              </span>

              {/* Yellow circle chevron */}
              <div
                className={`flex items-center transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down bg-[#F9D549] 
                  rounded-full text-white p-1"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </button>

            {/* Slide-down animated content */}
            <div
              ref={(el) => (contentRefs.current[faq.id] = el)}
              className="px-4 pb-4 text-gray-600 text-base 
              overflow-hidden transition-all duration-300 max-h-0 opacity-0"
            >
              <div>
{faq.answer} <img src={faq.img} alt={faq.question} className="grid  grid rounded align-centre col-3 w-18 h-auto mb-4"/>
              </div>
              
            </div>
          </div>
        );
      })}
    </section>
  );
}
