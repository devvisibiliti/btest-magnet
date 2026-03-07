"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SuperHeader() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4 flex-wrap sm:h-5">
{/* RIGHT: Social Icons */}
        <div className="flex items-center gap-4 sm:absolute sm:left-4">
          <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-red-500"><FaYoutube /></a>
        </div>
        {/* LEFT: Email + Phone */}
        <div className="flex items-center gap-4 sm:absolute sm:right-4 ">
          <p className="hidden sm:block flex justify-center">info.visibiliti@gmail.com</p>
          <p className="hidden sm:block">+91 90901 901 708</p>
        </div>

        {/* CENTER: Logo */}
        {/* <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div> */}

        
      </div>
    </div>
  );
}
