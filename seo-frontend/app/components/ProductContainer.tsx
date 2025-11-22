"use client";

import Link from "next/link";
import Image from "next/image";

type HighlightCard = {
  id: string;
  tag: string;        // e.g. "NEW", "HIGHLIGHT"
  title: string;      // main heading
  href: string;       // link
  image: string;      // image path (/public or remote)
  ctaLabel?: string;  // button text
};

const cards: HighlightCard[] = [
  {
    id: "1",
    tag: "NEW",
    title: "METAL DETECTORS",
    href: "/products/x-ray-inspection-systems",
    image: "/images/home/raycon-family.jpg",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "2",
    tag: "HIGHLIGHTS",
    title: "MAGNETIC EQUIPMENTS",
    href: "/compliance-package",
    image: "/images/home/compliance-package.jpg",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "3",
    tag: "HIGHLIGHT",
    title: "ELECTROMAGNETIC EQUIPMENTS",
    href: "/service-support/services",
    image: "/images/home/smart-service-solutions.jpg",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "4",
    tag: "NEW",
    title: "ELECTROPERMENANT MAGNETS",
    href: "/products/material-management-systems/platform-systems",
    image: "/images/home/material-management.jpg",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "5",
    tag: "SOLUTIONS",
    title: "VIBRATORY EQUIPMENTS",
    href: "/solutions/food-and-beverage",
    image: "/images/home/food-inspection.jpg",
    ctaLabel: "EXPLORE",
  },
  {
    id: "6",
    tag: "SOLUTIONS",
    title: "MIXING EQUIPMENTS",
    href: "/solutions/plastics-and-recycling",
    image: "/images/home/plastics-recycling.jpg",
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
        <p className="mt-2 text-base text-gray-600">
          Magnet
        </p>
      </div>

      {/* GRID: 1 col (mobile), 2 cols (md), 3 cols (xl) => 6 cards total */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <Link
            key={card.id}
            href={card.href}
            className="group relative block h-[260px] sm:h-[320px] md:h-[340px] overflow-hidden rounded-2xl bg-black"
          >
            {/* background image with zoom on hover */}
            <div className="absolute inset-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                priority={index < 3} // first row higher priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* gradient overlay with subtle darkening on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

            {/* content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="space-y-2">
                <p className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#00B5FF]">
                  {card.tag}
                </p>
                <h3 className="max-w-xs text-xl font-semibold text-white sm:text-2xl">
                  {card.title}
                </h3>
              </div>

              {/* CTA with animation: slide & lift on hover */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#00B5FF] group-hover:text-white">
                  {card.ctaLabel ?? "Learn more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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

            {/* subtle lift + shadow on the entire card */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:translate-y-[-3px] group-hover:shadow-xl" />
          </Link>
        ))}
      </div>
    </section>
  );
}
