"use client";

import Image from "next/image";
import Link from "next/link";

interface CardType {
  img: string;
  title: string;
  link: string;
  size: "big" | "small";
}

interface BenefitType {
  icon: string;
  title: string;
  text: string;
}

export default function HeroSection() {
  const cards: CardType[] = [
    {
      img: "/images/home/hand-held-metal-detector.jpg",
      title: "METAL DETECTORS",
      link: "/magnetic-sheetings",
      size: "big",
    },
    {
      img: "/images/home/PH41230-2-low.jpg",
      title: "MAGNETIC EQUIPMENTS",
      link: "/pneumatic-magnets",
      size: "small",
    },
    {
      img: "/images/home/Electromagnets.jpg",
      title: "ELECTROMAGNETIC EQUIPMENTS",
      link: "/magnetic-tapes",
      size: "big",
    },
    {
      img: "/images/home/backview_edited_noshadow2_5c1f8190-f1a9-427d-85f3-61b0a0b54a70.webp",
      title: "ELECTROPERMENANT MAGNETS",
      link: "/holding-electromagnets",
      size: "small",
    },
    {
      img: "/images/home/hand-held-metal-detector.jpg",
      title: "VIBRATORY EQUIPMENTS",
      link: "/neodymium-magnets",
      size: "big",
    },
    {
      img: "/images/home/Electromagnets.jpg",
      title: "MIXING EQUIPMENTS",
      link: "/scrap-magnets",
      size: "small",
    },
  ];

  const benefits: BenefitType[] = [
    {
      icon: "/icons/experience.svg",
      title: "Professional Experience",
      text: "since year 1991",
    },
    {
      icon: "/icons/quality.svg",
      title: "Verified Quality",
      text: "Top service is our main goal",
    },
    {
      icon: "/icons/delivery.svg",
      title: "Quick Delivery",
      text: "from our own stock",
    },
    {
      icon: "/icons/service.svg",
      title: "Professional Service",
      text: "by our team of professionals",
    },
  ];

  return (
    <section className="w-full mt-6">
      {/* GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">

        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            className={`relative group overflow-hidden rounded-lg shadow-md cursor-pointer
              ${card.size === "big" ? "h-56 sm:h-72" : "h-48 sm:h-60"}`}
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-0 bg-black/60 w-full py-3 text-center text-white text-lg font-semibold">
              {card.title}
            </div>
          </Link>
        ))}
      </div>

      {/* BENEFITS */}
      <div className="bg-gray-100 dark:bg-gray-100 mt-10 py-10 px-4">
        <div className=" mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Image
                src={benefit.icon}
                width={50}
                height={50}
                alt={benefit.title}
                className="dark:invert"
              />
              <p className="font-bold">{benefit.title}</p>
              <p className="text-sm opacity-70">{benefit.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
