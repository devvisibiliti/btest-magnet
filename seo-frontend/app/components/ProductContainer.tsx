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
    image: "/images/products/METAL-DETECTOR- FOR- TEXTILE- INDUSTRY.webp",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "2",
    tag: "HIGHLIGHTS",
    title: "MAGNETIC EQUIPMENTS",
    href: "/compliance-package",
    image: "/images/products/MAGNETIC-ROD.webp",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "3",
    tag: "HIGHLIGHT",
    title: "ELECTROMAGNETIC EQUIPMENTS",
    href: "/service-support/services",
    image: "/images/products/ELECTROPERMEN-ANT-MAGNETIC-LIFTERS.webp",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "4",
    tag: "NEW",
    title: "ELECTROPERMENANT MAGNETS",
    href: "/products/material-management-systems/platform-systems",
    image: "/images/products/electro-permanent-magnetic-filter.webp",
    ctaLabel: "LEARN MORE",
  },
  {
    id: "5",
    tag: "SOLUTIONS",
    title: "VIBRATORY EQUIPMENTS",
    href: "/solutions/food-and-beverage",
    image: "/images/products/LINEAR-VIBRATORY- FEEDER.webp",
    ctaLabel: "EXPLORE",
  },
  {
    id: "6",
    tag: "SOLUTIONS",
    title: "MIXING EQUIPMENTS",
    href: "/solutions/plastics-and-recycling",
    image: "/images/products/PADDLE-MIXER-equipment.webp",
    ctaLabel: "EXPLORE",
  },
];

export default function ProductContainer() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#111]">
          Magnetronix Highlights
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Explore our top-performing product categories
        </p>
      </div>
      <div className="grid gap-8 sm:gap-10 md:grid-cols-3 xl:grid-cols-3">
        {cards.map((card, index) => (
          <Link
  key={card.id}
  href={card.href}
  className="
    group relative block 
    h-[500px] sm:h-[300px] md:h-[340px] xl:h-[500px]
    overflow-hidden rounded-3xl 
    bg-white shadow-lg border border-yellow-300/30
    hover:shadow-2xl hover:border-yellow-400/70
    transition-all duration-500 "
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
        group-hover:scale-110
      "
    />
  </div>

  {/* ⭐ Soft Yellow Tint Overlay */}
  <div
    className="
      absolute inset-0
      
      transition-all duration-500
      group-hover:bg-[rgba(242,193,46,0.28)]
      mix-blend-multiply
    "
  ></div>

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col justify-between p-6">
    {/* <div className="space-y-2">
      <p className="
        inline-block text-xs font-bold uppercase 
        tracking-widest text-yellow-600 drop-shadow
      ">
        {card.tag}
      </p>

      <h3 className="
        max-w-xs text-2xl font-extrabold text-white drop-shadow-xl
      ">
        {card.title}
      </h3>
    </div> */}

    <span className="mt-auto
      inline-flex justify-center items-center text-center gap-2 rounded-full 
      bg-yellow-300 px-4 py-2 text-sm font-semibold text-black
      shadow-md transition-all duration-300
      group-hover:bg-yellow-400
    ">
      {card.title ?? "Learn more"}
    </span>
  </div>
</Link>

        ))}
      </div>
    </section>
  );
}
