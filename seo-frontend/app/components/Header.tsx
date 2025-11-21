"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaMoon, FaSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dark, setDark] = useState(false);

  // DARK MODE HANDLER
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white dark:bg-white dark:text-dark shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">

          {/* LEFT: LOGO IMAGE */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={45} height={45} />
            </Link>
            <span className="text-xl font-bold hidden sm:block">Magnetronix</span>
          </div>

          {/* CENTER: DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-lg font-medium items-center">
            <Link href="/" className="hover:text-blue-600">Home</Link>

            {/* DROPDOWN MENU */}
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="hover:text-blue-600"
              >
                Products ▼
              </button>

              {dropdown && (
                <div
                  className="absolute bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-md p-4 flex flex-col gap-3 w-40 z-50"
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link href="/products/magnet" className="hover:text-blue-600">Magnet</Link>
                  <Link href="/products/posters" className="hover:text-blue-600">Posters</Link>
                  <Link href="/products/custom" className="hover:text-blue-600">Custom Products</Link>
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          {/* RIGHT: SOCIAL + DARK MODE (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-600" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />

            {/* DARK MODE TOGGLE */}
            <button onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE MENU */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-0 right-0 bg-white dark:bg-gray-900 w-3/4 h-full shadow-lg p-6 flex flex-col gap-6 animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="text-3xl mb-4" onClick={() => setOpen(false)}>
              <IoClose />
            </button>

            {/* Menu Links */}
            <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium">
              Home
            </Link>

            {/* MOBILE DROPDOWN */}
            <button
              onClick={() => setDropdown(!dropdown)}
              className="text-lg font-medium text-left"
            >
              Products ▼
            </button>
            {dropdown && (
              <div className="ml-2 flex flex-col gap-3 text-base">
                <Link href="/products/magnet" onClick={() => setOpen(false)}>Magnet</Link>
                <Link href="/products/posters" onClick={() => setOpen(false)}>Posters</Link>
                <Link href="/products/custom" onClick={() => setOpen(false)}>Custom</Link>
              </div>
            )}

            <Link href="/about" className="text-lg font-medium" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-2xl">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>

            {/* Dark mode toggle */}
            <button
              className="mt-4 flex items-center gap-3"
              onClick={() => setDark(!dark)}
            >
              {dark ? <FaSun /> : <FaMoon />}
              <span>{dark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black shadow-xl py-3 flex justify-around text-2xl z-40">
        <Link href="/">
          <span>🏠</span>
        </Link>
        <Link href="/products">
          <span>🛒</span>
        </Link>
        <Link href="/about">
          <span>ℹ️</span>
        </Link>
        <Link href="/contact">
          <span>📞</span>
        </Link>
      </div>
    </>
  );
}
