"use client";

import Link from "next/link";
import Image from "next/image";

type HighlightCard = {
  id: string;
  tag: string;
  title: string;
  href: string;
  image: string;
  ctaLabel?: string;
};

const cards: HighlightCard[] = [
  {
    id: "1",
    tag: "NEW",
    title: "METAL DETECTORS",
    href: "/products/x-ray-inspection-systems",
    image: "/categories/tap1.png",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "2",
    tag: "HIGHLIGHTS",
    title: "MAGNETIC EQUIPMENTS",
    href: "/compliance-package",
    image: "/categories/tap1.png",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "3",
    tag: "HIGHLIGHT",
    title: "ELECTROMAGNETIC EQUIPMENTS",
    href: "/service-support/services",
    image: "/categories/tap1.png",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "4",
    tag: "NEW",
    title: "ELECTROPERMENANT MAGNETS",
    href: "/products/material-management-systems/platform-systems",
    image: "/categories/tap1.png",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "5",
    tag: "SOLUTIONS",
    title: "VIBRATORY EQUIPMENTS",
    href: "/solutions/food-and-beverage",
    image: "/categories/tap1.png",
    ctaLabel: "EXPLORE",
  },
  {
    id: "6",
    tag: "SOLUTIONS",
    title: "MIXING EQUIPMENTS",
    href: "/solutions/plastics-and-recycling",
    image: "/categories/tap1.png",
    ctaLabel: "EXPLORE",
  },
];

export default function ProductContainer() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Magnetronix Highlights
        </h2>
        <p className="mt-2 text-base text-gray-600">Magnet</p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <Link
            key={card.id}
            href={card.href}
            className="
              group relative block 
              h-[260px] sm:h-[320px] md:h-[340px]
              overflow-hidden rounded-2xl bg-black
              transition-all duration-500 
              hover:-translate-y-2 hover:shadow-2xl hover:rotate-[0.3deg]
            "
          >

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority={index < 3}
                className="
                  object-cover 
                  transition-all duration-700 ease-out
                  group-hover:scale-110 group-hover:brightness-[0.75]
                "
              />
            </div>

            {/* Dark Overlay */}
            <div className="
              pointer-events-none absolute inset-0 
              bg-gradient-to-t from-black/40 via-black/30 to-transparent
              transition-all duration-700
              group-hover:from-black/80 group-hover:via-black/60
            "></div>

            {/* Color Gradient Overlay */}
            <div className="
              pointer-events-none absolute inset-0 
              opacity-0 group-hover:opacity-100
              transition-opacity duration-700
              bg-[linear-gradient(135deg,#0187CF55,#3B281E55)]
              mix-blend-soft-light
            "></div>

            {/* Glow Border */}
            <div className="
              pointer-events-none absolute inset-0 rounded-2xl 
              border border-transparent
              group-hover:border-[#0187CFcc]
              group-hover:shadow-[0_0_30px_#0187CFAA]
              transition-all duration-500
            "></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="space-y-2">
                <p className="
                  inline-block text-xs font-semibold uppercase 
                  tracking-[0.25em] text-[#00B5FF]
                  group-hover:text-white transition-colors duration-300
                ">
                  {card.tag}
                </p>

                <h3 className="
                  max-w-xs text-xl font-semibold text-white sm:text-2xl
                  transition-all duration-500 
                  group-hover:text-[#00B5FF]
                ">
                  {card.title}
                </h3>
              </div>

              {/* CTA */}
              <div>
                <span className="
                  inline-flex items-center gap-2 rounded-full 
                  bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 
                  shadow-md 
                  transition-all duration-300
                  group-hover:-translate-y-1 
                  group-hover:bg-[#0187CF] group-hover:text-white
                  group-hover:shadow-[0_0_12px_#0187CFAA]
                ">
                  {card.ctaLabel ?? "Learn more"}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="
                      h-4 w-4 
                      transition-transform duration-300 
                      group-hover:translate-x-1
                    "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
