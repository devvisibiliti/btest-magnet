"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";

/* ---------------------------------------------------------
   MENU DATA (6 categories, each with its own mega menu)
--------------------------------------------------------- */
const menus = {
  metal: {
    label: "METAL DETECTORS",
    columns: [
      {
        title: "Handheld Metal Detectors",
        image: "/categories/tap1.png",
        links: [
          { name: "Portable Detector", href: "#" },
          { name: "Handheld Pro", href: "#" },
        ],
      },
      {
        title: "Conveyor Metal Detectors",
        image: "/categories/tap1.png",
        links: [
          { name: "Food Grade Conveyor", href: "#" },
          { name: "Industrial Conveyor", href: "#" },
        ],
      },
      {
        title: "X-Ray Inspection",
        image: "/categories/tap1.png",
        links: [
          { name: "Small X-Ray", href: "#" },
          { name: "Large X-Ray", href: "#" },
        ],
      },
      {
        title: "Handheld Metal Detectors",
        image: "/categories/tap1.png",
        links: [
          { name: "Portable Detector", href: "#" },
          { name: "Handheld Pro", href: "#" },
        ],
      },
      {
        title: "Handheld Metal Detectors",
        image: "/categories/tap1.png",
        links: [
          { name: "Portable Detector", href: "#" },
          { name: "Handheld Pro", href: "#" },
        ],
      },
      {
        title: "Handheld Metal Detectors",
        image: "/categories/tap1.png",
        links: [
          { name: "Portable Detector", href: "#" },
          { name: "Handheld Pro", href: "#" },
        ],
      },
    ],
  },

  magnetic: {
    label: "MAGNETIC EQUIPMENTS",
    columns: [
      {
        title: "Lifting Magnets",
        image: "/categories/tap1.png",
        links: [
          { name: "Permanent Lifter", href: "#" },
          { name: "Power Lifter", href: "#" },
        ],
      },
      {
        title: "Magnetic Tools",
        image: "/categories/tap1.png",
        links: [
          { name: "Magnetic Holders", href: "#" },
          { name: "Magnetic Bases", href: "#" },
        ],
      },
      {
        title: "Magnetic Separators",
        image: "/categories/tap1.png",
        links: [
          { name: "Drum Separator", href: "#" },
          { name: "Grate Magnet", href: "#" },
        ],
      },
      {
        title: "Magnetic Separators",
        image: "/categories/tap1.png",
        links: [
          { name: "Drum Separator", href: "#" },
          { name: "Grate Magnet", href: "#" },
        ],
      },
      {
        title: "Magnetic Separators",
        image: "/categories/tap1.png",
        links: [
          { name: "Drum Separator", href: "#" },
          { name: "Grate Magnet", href: "#" },
        ],
      },
      {
        title: "Magnetic Separators",
        image: "/categories/tap1.png",
        links: [
          { name: "Drum Separator", href: "#" },
          { name: "Grate Magnet", href: "#" },
        ],
      },
    ],
  },

  electromagnetic: {
    label: "ELECTROMAGNETIC EQUIPMENTS",
    columns: [
      {
        title: "Electromagnetic Lifters",
        image: "/categories/tap1.png",
        links: [
          { name: "EM Lifter 1000", href: "#" },
          { name: "EM Lifter 2000", href: "#" },
        ],
      },
      {
        title: "Control Panels",
        image: "/categories/tap1.png",
        links: [
          { name: "Digital Panel", href: "#" },
          { name: "Analog Panel", href: "#" },
        ],
      },
      {
        title: "Coils & Spares",
        image: "/categories/tap1.png",
        links: [
          { name: "Copper Coils", href: "#" },
          { name: "Cooling Units", href: "#" },
        ],
      },
      {
        title: "Coils & Spares",
        image: "/categories/tap1.png",
        links: [
          { name: "Copper Coils", href: "#" },
          { name: "Cooling Units", href: "#" },
        ],
      },
      {
        title: "Coils & Spares",
        image: "/categories/tap1.png",
        links: [
          { name: "Copper Coils", href: "#" },
          { name: "Cooling Units", href: "#" },
        ],
      },
      {
        title: "Coils & Spares",
        image: "/categories/tap1.png",
        links: [
          { name: "Copper Coils", href: "#" },
          { name: "Cooling Units", href: "#" },
        ],
      },
    ],
  },

  electroperm: {
    label: "ELECTROPERMENANT MAGNETS",
    columns: [
      {
        title: "EPM Lifting Systems",
        image: "/categories/tap1.png",
        links: [
          { name: "Lifting Plate", href: "#" },
          { name: "Block Magnet", href: "#" },
        ],
      },
      {
        title: "Permanent Magnets",
        image: "/categories/tap1.png",
        links: [
          { name: "NdFeB Magnets", href: "#" },
          { name: "Ferrite Magnets", href: "#" },
        ],
      },
      {
        title: "Industry Applications",
        image: "/categories/tap1.png",
        links: [
          { name: "Fabrication", href: "#" },
          { name: "Automotive", href: "#" },
        ],
      },
      {
        title: "Industry Applications",
        image: "/categories/tap1.png",
        links: [
          { name: "Fabrication", href: "#" },
          { name: "Automotive", href: "#" },
        ],
      },
      {
        title: "Industry Applications",
        image: "/categories/tap1.png",
        links: [
          { name: "Fabrication", href: "#" },
          { name: "Automotive", href: "#" },
        ],
      },
      {
        title: "Industry Applications",
        image: "/categories/tap1.png",
        links: [
          { name: "Fabrication", href: "#" },
          { name: "Automotive", href: "#" },
        ],
      },
    ],
  },

  vibratory: {
    label: "VIBRATORY EQUIPMENTS",
    columns: [
      {
        title: "Feeders",
        image: "/categories/tap1.png",
        links: [
          { name: "Vibratory Feeder", href: "#" },
          { name: "Electromagnetic Feeder", href: "#" },
        ],
      },
      {
        title: "Screens",
        image: "/categories/tap1.png",
        links: [
          { name: "Vibrating Screen", href: "#" },
          { name: "Rotary Screen", href: "#" },
        ],
      },
      {
        title: "Accessories",
        image: "/categories/tap1.png",
        links: [
          { name: "Mounts", href: "#" },
          { name: "Controllers", href: "#" },
        ],
      },
      {
        title: "Accessories",
        image: "/categories/tap1.png",
        links: [
          { name: "Mounts", href: "#" },
          { name: "Controllers", href: "#" },
        ],
      },
      {
        title: "Accessories",
        image: "/categories/tap1.png",
        links: [
          { name: "Mounts", href: "#" },
          { name: "Controllers", href: "#" },
        ],
      },
      {
        title: "Accessories",
        image: "/categories/tap1.png",
        links: [
          { name: "Mounts", href: "#" },
          { name: "Controllers", href: "#" },
        ],
      },
    ],
  },

  mixing: {
    label: "MIXING EQUIPMENTS",
    columns: [
      {
        title: "Industrial Mixers",
        image: "/categories/tap1.png",
        links: [
          { name: "Ribbon Blender", href: "#" },
          { name: "Paddle Mixer", href: "#" },
        ],
      },
      {
        title: "Powder Handling",
        image: "/categories/tap1.png",
        links: [
          { name: "Hoppers", href: "#" },
          { name: "Silos", href: "#" },
        ],
      },
      {
        title: "Services",
        image: "/categories/tap1.png",
        links: [
          { name: "Maintenance", href: "#" },
          { name: "Installation", href: "#" },
        ],
      },
      {
        title: "Services",
        image: "/categories/tap1.png",
        links: [
          { name: "Maintenance", href: "#" },
          { name: "Installation", href: "#" },
        ],
      },
      {
        title: "Services",
        image: "/categories/tap1.png",
        links: [
          { name: "Maintenance", href: "#" },
          { name: "Installation", href: "#" },
        ],
      },
      {
        title: "Services",
        image: "/categories/tap1.png",
        links: [
          { name: "Maintenance", href: "#" },
          { name: "Installation", href: "#" },
        ],
      },
    ],
  },
};

/* ---------------------------------------------------------
   ALIGNMENT MAP → Fix cut-off issue
--------------------------------------------------------- */
const alignmentMap: Record<string, "left" | "center" | "right"> = {
  metal: "left",
  magnetic: "center",
  electromagnetic: "center",
  electroperm: "center",
  vibratory: "right",
  mixing: "right",
};

export default function Header() {
  const [dark, setDark] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [activeMega, setActiveMega] = useState<string | null>(null);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container height:200px mx-auto flex items-center justify-between py-6 px-4">

          {/* LOGO */}
          {/* <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
            <span className="font-bold text-xl hidden md:block">Magnetronix</span>
          </Link> */}

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 items-center font-medium font-family: 'Roboto', sans-serif; line-height: 2.5rem;
    font-weight: 500; font-semibold ">

            <Link href="/" className="hover:text-blue-600">Home</Link>

            {/* LOOP SIX CATEGORIES */}
            {(Object.keys(menus) as string[]).map((key) => {
  const menu = menus[key];
  const isOpen = activeMega === key;

  const alignment =
    alignmentMap[key] === "left"
      ? "left-0"
      : alignmentMap[key] === "right"
      ? "right-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <div
      key={key}
      className="relative"
      onMouseEnter={() => setActiveMega(key)}
      onMouseLeave={() => setActiveMega(null)}
    >
      <button className="hover:text-blue-600">
        {menu.label}
      </button>

      {isOpen && (
        <>
          {/* 👇 Invisible hover bridge */}
          <div className="absolute left-0 w-full h-6 top-full"></div>

          <div
            className={`absolute ${alignment} mt-6 top-full w-[900px] 
                        rounded-lg bg-white shadow-xl z-50 pb-10 pt-5 border`}
          >
            <div className="grid grid-cols-3 gap-6">
              {menu.columns.map((col, idx) => (
                <div key={idx} className="flex gap-4">
                  <Image
                    src={col.image}
                    width={64}
                    height={64}
                    alt={col.title}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold">{col.title}</p>
                    <div className="flex flex-col mt-2 gap-1">
                      {col.links.map((l, j) => (
                        <Link
                          key={j}
                          href={l.href}
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
})}


            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          {/* DARK MODE + MOBILE ICON */}
          {/* <div className="hidden md:flex gap-4 items-center text-xl">
            <button onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div> */}

          <button className="md:hidden text-3xl" onClick={() => setMobile(true)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobile && (
        <div
          className="fixed inset-0 z-50 bg-black/60"
          onClick={() => setMobile(false)}
        >
          <div
            className="absolute right-0 top-0 w-3/4 bg-white h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-3xl mb-6"
              onClick={() => setMobile(false)}
            >
              <IoClose />
            </button>

            <div className="flex flex-col gap-6 text-lg">
              <Link href="/">Home</Link>

              {/* MOBILE DROPDOWNS */}
              {(Object.keys(menus) as string[]).map((key) => {
                const menu = menus[key];
                return (
                  <details key={key} className="border-b pb-2">
                    <summary className="cursor-pointer font-medium">{menu.label}</summary>

                    <div className="mt-2 ml-4">
                      {menu.columns.map((col, idx) => (
                        <div key={idx} className="mb-3">
                          <p className="font-semibold">{col.title}</p>
                          {col.links.map((l, j) => (
                            <Link key={j} href={l.href} className="block text-sm mt-1">
                              {l.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </details>
                );
              })}

              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>

              <button
                onClick={() => setDark(!dark)}
                className="mt-4 flex items-center gap-3"
              >
                {dark ? <FaSun /> : <FaMoon />}
                {dark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
