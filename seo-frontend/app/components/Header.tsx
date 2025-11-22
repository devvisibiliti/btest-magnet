"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";

// ----- MEGA MENU DATA -----
const productMenu = [
  {
    title: "Raw Magnetic Materials",
    image: "/categories/raw.jpg",
    links: [
      { name: "Ferrite", href: "/products/ferrite" },
      { name: "NdFeB", href: "/products/ndfeb" },
      { name: "SmCo", href: "/products/smco" },
    ],
  },
  {
    title: "Magnetic Systems",
    image: "/categories/tap1.png",
    links: [
      { name: "Magnetic Hooks", href: "/products/hooks" },
      { name: "Lifting Magnets", href: "/products/lifters" },
      { name: "Magnetic Sweepers", href: "/products/sweepers" },
    ],
  },
  {
    title: "Magnetic Separation",
    image: "/categories/separation.jpg",
    links: [
      { name: "Grate Magnets", href: "/products/grate" },
      { name: "Drum Separators", href: "/products/drum" },
      { name: "Magnetic Filters", href: "/products/filters" },
    ],
  },
  
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [activeMega, setActiveMega] = useState(false);

  return (
    <>
      {/* MAIN HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-black dark:text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
            <span className="font-bold text-xl hidden md:block">Magnetronix</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-lg items-center font-medium">

            <Link href="/" className="hover:text-blue-600">Home</Link>

            {/* MEGA MENU TRIGGER */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMega(true)}
              onMouseLeave={() => setActiveMega(false)}
            >
              <button className="hover:text-blue-600">Products ▼</button>

              {/* MEGA MENU */}
              {activeMega && (
  <div className="absolute left-0 bg-white dark:bg-white-200 shadow-xl p-6 rounded-lg mt-2 z-50 min-w-[700px]">

    {/* Grid – 1 column, but each item uses 2 rows */}
    <div className="grid grid-cols-2 gap-4">

      {productMenu.map((cat, index) => (
        <div key={index} className="flex items-start gap-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">

          {/* Small Category Image */}
          <Image
            src={cat.image}
            alt={cat.title}
            width={55}
            height={55}
            className="rounded-md object-cover"
          />

          {/* Category Text */}
          <div className="flex flex-col">
            <p className="font-semibold">{cat.title}</p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
              {cat.links.map((l, idx) => (
                <Link
                  key={idx}
                  href={l.href}
                  className="text-sm hover:text-blue-500 whitespace-nowrap"
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
)}

            </div>

            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          {/* RIGHT TOOLS */}
          <div className="hidden md:flex text-xl items-center gap-4">
            <button onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button onClick={() => setOpenMobile(true)} className="md:hidden text-3xl">
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {openMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50"
          onClick={() => setOpenMobile(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 bg-white dark:bg-gray-900 h-full p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="text-3xl mb-6"
              onClick={() => setOpenMobile(false)}
            >
              <IoClose />
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6 text-lg font-medium">

              <Link href="/" onClick={() => setOpenMobile(false)}>
                Home
              </Link>

              {/* Mobile Mega Dropdown */}
              <details className="cursor-pointer">
                <summary className="text-lg font-medium">Products</summary>
                <div className="ml-4 mt-2">
                  {productMenu.map((cat, index) => (
                    <div key={index} className="mb-4">
                      <p className="font-semibold">{cat.title}</p>
                      {cat.links.map((l, idx) => (
                        <Link
                          key={idx}
                          href={l.href}
                          className="block text-sm mt-1"
                          onClick={() => setOpenMobile(false)}
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>

              <Link href="/about" onClick={() => setOpenMobile(false)}>
                About
              </Link>

              <Link href="/contact" onClick={() => setOpenMobile(false)}>
                Contact
              </Link>

              {/* Dark mode */}
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
