"use client";

import { useState } from "react";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What’s the example",
      answer:
        "What’s the example this is example text for faq section in magnetronix website?",
    },
    {
      id: 2,
      question: "What’s the example",
      answer:
        "What’s the example this is example text for faq section in magnetronix website?",
    },
    {
      id: 3,
      question: "What’s the example",
      answer:
        "What’s the example this is example text for faq section in magnetronix website?",
    },
    {
      id: 4,
      question: "What’s the example",
      answer:
        "What’s the example this is example text for faq section in magnetronix website?",
    },
  ];

  return (
    <section className="my-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-center">
        Magnetronix
        <br />
        <div className="bg-yellow-400 inline-block px-4 py-1 mt-2 rounded-lg">
          With AI Power
        </div>
      </h2>

      <div className="flex flex-col lg:flex-row mx-auto md:max-w-5xl items-center justify-center lg:justify-between md:gap-20 lg:px-20 p-8 lg:py-16">
        {/* LEFT IMAGE (you can remove this if not needed) */}
        <div className="lg:w-1/2 md:scale-125 flex justify-center mb-8 lg:mb-0">
          <img
            src="/images/home/Group 81-IhejF_Oy.png"
            alt="AI Visual"
            className="w-full max-w-sm"
          />
        </div>

        {/* FAQ RIGHT SIDE */}
        <div className="w-full lg:w-1/2 space-y-4">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition"
                onClick={() => setOpen(isOpen ? null : faq.id)}
              >
                <div className="flex justify-between items-center pb-2">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>

                  {/* Yellow Round Chevron Button */}
                  <span
                    className="bg-yellow-400 rounded-full p-1 flex items-center justify-center"
                    style={{ width: 32, height: 32 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </div>

                {/* Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 text-gray-600 ${
                    isOpen ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
