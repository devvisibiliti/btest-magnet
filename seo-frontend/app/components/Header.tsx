"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import SearchBar from "./SearchBar";

/* ================================
   TYPES
================================ */

type MenuLink = {
  name: string;
  href: string;
};

type MenuGroup = {
  subtitle?: string;
  links: MenuLink[];
};

type MenuColumn = {
  title: string;
  href?: string;
  image?: string;
  links?: MenuLink[]; // for simple structure
  groups?: MenuGroup[]; // for multiple subtitles
};

type MenuCategory = {
  label: string;
  labelHref?: string;
  columns: MenuColumn[];
};

/* ================================
   MENU DATA
================================ */

const menus: Record<string, MenuCategory> = {
  company: {
    label: "COMPANY",
    columns: [
      { title: "About", href: "/about" },
      { title: "History", href: "/history" },
      { title: "Quality and Certification", href: "/quality" },
      { title: "Mission, Vision and Values", href: "/values" },
    ],
  },

  equipment: {
    label: "EQUIPMENT",
    columns: [
      {
        title: "METAL DETECTORS",
        groups: [
          {
            subtitle: "Metal detectors for stone crusher industry",
            links: [
              { name: "ORANGE COIL METAL DETECTOR", href: "#" },
              { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          {
            subtitle: "Metal detectors for food industry",
            links: [
              { name: "CONVEYOR TYPE METAL DETECTOR", href: "#" },
              { name: "GRAVITY FEED METAL DETECTOR", href: "#" },
              { name: "PIPE LINE METAL DETECTOR", href: "#" },
            ],
          },
          {
            subtitle: "METAL DETECTOR FOR PHARMACHEUTICAL INDUSTRY",
            links: [
              { name: "TABLET METAL DETECTOR", href: "#" },
              
            ],
          },
          {
            subtitle: "METAL DETECTOR FOR TEXTILE INDUSTRY",
            links: [
              { name: "NEEDLE METAL DETECTOR", href: "#" },
              { name: "FLAT TYPE METAL DETECOR", href: "#" },
            ],
          },
          {
            subtitle: "METAL DETECTORS FOR COAL AND CEMENT INDUSTRY",
            links: [
              { name: "PULSE INDUCTION METAL DETECTOR", href: "#" },
              
            ],
          },
        ],
      },
      {
        title: "MAGNETIC EQUIPMENTS",
        groups: [
          {
            // subtitle: "PERMENANT SUSPENSION MAGNET",
            links: [
              { name: "PERMENANT SUSPENSION MAGNET", href: "#" },
              { name: "PERMENANT OVERBAND MAGNETIC SEPERAOR", href: "#" },
              // { name: "PERMENANT DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
 {
            subtitle: "PERMENANT DRUM MAGNET SEPERATOR",
            links: [
              { name: "SINGLE STAGE DRUM MAGNET SEPERATOR", href: "#" },
              { name: "TWO STAGE DRUM MAGNET SEPERATOR", href: "#" },
              { name: "THREE STAGE DRUM MAGNET SEPERATOR", href: "#" },
              { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "MAGNETIC DESTONER",
            links: [
              { name: "MAGNETIC DESTONER", href: "#" },
              // { name: "TWO STAGE DRUM MAGNET SEPERATOR", href: "#" },
              // { name: "THREE STAGE DRUM MAGNET SEPERATOR", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
           {
            subtitle: "HOPPER MAGNET",
            links: [
              { name: "CIRCULAR MAGNETIC GRILL", href: "#" },
              { name: "RECTANGULAR MAGNETIC GRILL", href: "#" },
              { name: "SQUARE MAGNETIC GRILL", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "PLATE MAGNET",
            links: [
              // { name: "CIRCULAR MAGNETIC GRILL", href: "#" },
              // { name: "RECTANGULAR MAGNETIC GRILL", href: "#" },
              // { name: "SQUARE MAGNETIC GRILL", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "HUMP MAGNET",
            links: [
              // { name: "CIRCULAR MAGNETIC GRILL", href: "#" },
              // { name: "RECTANGULAR MAGNETIC GRILL", href: "#" },
              // { name: "SQUARE MAGNETIC GRILL", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "MAGNETIC FILTER",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "MAGNETIC DESTONER",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "MAGNETIC HEAD PULLY",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "COOLANT MAGNETIC SEPERATOR",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "MAGNETIC SWEEPERS",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "MAGNETIC ROD",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "HAND MAGNET",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },
          {
            subtitle: "ROLLER TYPE MAGNETIC SEPERATOR",
            links: [
              { name: "DRAWER MAGNETIC FILTER", href: "#" },
              // { name: "PIPELINE MAGNETIC FILTER", href: "#" },
              // { name: "BULLET MAGNET", href: "#" },
              // { name: "FOUR STAGE DRUM MAGNET SEPERATOR", href: "#" },
            ],
          },

        ],
        
      },
      {
        title: "ELECTROMAGNETIC EQUIPMENTS",
        groups: [
          {
            subtitle: "SUSPENSION ELECRTOMAGNET",
            links: [
              { name: "ORANGE COIL METAL DETECTOR", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          {
            subtitle: "OVERBAND ELECTROMAGNETIC SEPERATOR",
            links: [
              { name: "CONVEYOR TYPE METAL DETECTOR", href: "#" },
              { name: "GRAVITY FEED METAL DETECTOR", href: "#" },
              { name: "PIPE LINE METAL DETECTOR", href: "#" },
            ],
          },
          {
            subtitle: "CIRCULAR MAGNETIC LIFTER",
            links: [
              { name: "TABLET METAL DETECTOR", href: "#" },
              
            ],
          },
          
        ],
      },
      {
        title: "ELECTROPERMENANT MAGNETS",
        groups: [
          {
            subtitle: "ELECTROPERMENANT MAGNETIC LIFTERS",
            links: [
              { name: "ORANGE COIL METAL DETECTOR", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          
          
        ],
      },
      {
        title: "MIXING EQUIPMENTS",
        groups: [
          {
            subtitle: "PADDLE MIXER",
            links: [
              { name: "SINGLE SHAFT PADDLE MIXER", href: "#" },
              { name: "TWIN SHAFT PADDLE MIXER", href: "#" },
            ],
          },
          {
            subtitle: "RIBBON BLENDER",
            links: [
              { name: "RIBBON BLENDER", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          
          
          
        ],
      },
      {
        title: "VIBRATORY EQUIPMENTS",
        groups: [
          {
            subtitle: "LINEAR VIBRATORY FEEDER",
            links: [
              { name: "LINEAR VIBRATORY FEEDER", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          {
            subtitle: "VIBRATORY PAN FEEDER",
            links: [
              { name: "VIBRATORY PAN FEEDER", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          {
            subtitle: "VIBRO SIFTER",
            links: [
              { name: "CIRCULAR VIBRATORY SCREEN FOR FOOD INDUSTRY", href: "#" },
              { name: "CIRCULAR VIBRATORY SCREEN FOR PHARMACUAUTICAL INDUSTRY", href: "#" },
              { name: "ULTRASONIC VIBRO SIFTER", href: "#" },
              { name: "BIN ACTIVATOR", href: "#" },
            ],
          },
          {
            subtitle: "TABLET DEDUSTER",
            links: [
              { name: "CIRCULAR VIBRATORY SCREEN FOR FOOD INDUSTRY", href: "#" },
              // { name: "CIRCULAR VIBRATORY SCREEN FOR PHARMACUAUTICAL INDUSTRY", href: "#" },
              // { name: "ULTRASONIC VIBRO SIFTER", href: "#" },
              // { name: "BIN ACTIVATOR", href: "#" },
            ],
          },
          
          
        ],
      },
      {
        title: "VIBRATORY PAN FEEDER",
        groups: [
          {
            subtitle: "LINEAR VIBRATORY FEEDER",
            links: [
              { name: "LINEAR VIBRATORY FEEDER", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          
          
        ],
      },
      {
        title: "VIBRATORY EQUIPMENTS",
        groups: [
          {
            subtitle: "LINEAR VIBRATORY FEEDER",
            links: [
              { name: "LINEAR VIBRATORY FEEDER", href: "#" },
              // { name: "SIDE WAYS METAL DETECTOR", href: "#" },
            ],
          },
          
          
        ],
      },
    ],
  },

  industries: {
    label: "INDUSTRIES",
    columns: [
      { title: "Chemical", href: "/chemical" },
      { title: "Fine Chemicals", href: "/finechemicals" },
      { title: "Petrochemical", href: "/petrochemical" },
      { title: "Pharmaceutical", href: "/pharma" },
      { title: "Cosmetics", href: "/cosmetics" },
      { title: "Food", href: "/food" },
    ],
  },

  services: {
    label: "SERVICES",
    columns: [
      { title: "Engineering", href: "/engineering" },
      { title: "Manufacturing", href: "/manufacturing" },
      { title: "Quality", href: "/quality" },
      { title: "After Sales Service", href: "/after-sales" },
    ],
  },

  stock: {
    label: "STOCK EQUIPMENT",
    labelHref: "/stock-equipments",
    columns: [],
  },
};

/* ================================
   ALIGNMENT MAP
================================ */

const alignmentMap: Record<string, "left" | "center" | "right"> = {
  company: "left",
  equipment: "center",
  industries: "center",
  services: "center",
  stock: "right",
};

/* ================================
   COMPONENT
================================ */

export default function Header() {
  const [mobile, setMobile] = useState(false);
  
  const [activeMega, setActiveMega] = useState<string | null>(null);
//   useEffect(() => {
//   if (activeMega === "equipment") {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }
// }, [activeMega]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-5 px-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={45} height={45} />
            <span className="font-bold text-xl hidden md:block">
              Magnetronix
            </span>
          </Link>

          <SearchBar />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 items-center font-medium text-sm tracking-wide">

            <Link href="/" className="hover:text-blue-600 transition">
              HOME
            </Link>

            {Object.entries(menus).map(([key, menu]) => {
              const hasDropdown = menu.columns.length > 0;
              const isOpen = activeMega === key && hasDropdown;
              const alignment =
                alignmentMap[key] === "left"
                  ? "left-0"
                  : alignmentMap[key] === "right"
                  ? "right-0"
                  : "left-1/2 -translate-x-1/2";

              const isSimpleMenu =
                menu.columns.length <= 6 &&
                !menu.columns.some((col) => col.groups || col.links);

              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveMega(key)}
                  onMouseLeave={() => hasDropdown && setActiveMega(null)}
                >
                  {menu.labelHref ? (
                    <Link href={menu.labelHref} className="hover:text-blue-600">
                      {menu.label}
                    </Link>
                  ) : (
                    <button className="hover:text-blue-600">
                      {menu.label}
                    </button>
                  )}

                  {isOpen && (
                    <>
                      <div className="absolute top-full left-0 w-full h-4"></div>

                      {isSimpleMenu ? (
                        /* SIMPLE DROPDOWN */
                        <div
                          className={`absolute ${alignment} top-full mt-2 bg-white shadow-xl border rounded-xl py-4 px-6 z-50 w-64`}
                        >
                          <div className="flex flex-col space-y-3">
                            {menu.columns.map((col, idx) => (
                              <Link
                                key={idx}
                                href={col.href || "#"}
                                className="text-sm hover:text-blue-600 transition"
                              >
                                {col.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* MEGA MENU */
                        <div
  className={`absolute ${alignment} top-full mt-2 
  bg-white 
  shadow-[0_25px_70px_rgba(0,0,0,0.15)] 
  border border-gray-100 
  rounded-2xl 
  px-14 py-12 
  z-50 
  w-[90vw] max-w-[1000px]
  max-h-[80vh] overflow-y-auto`}
>
                          <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">

                            {menu.columns.map((col, idx) => (
                              <div key={idx} className="space-y-6">

                                <p className="text-lg font-semibold hover:text-blue-600 transition">
                                  {col.href ? (
                                    <Link href={col.href}>{col.title}</Link>
                                  ) : (
                                    col.title
                                  )}
                                </p>

                                {/* GROUPS (multiple subtitles) */}
                                {col.groups && (
                                  <div className="space-y-6">
                                    {col.groups.map((group, gIndex) => (
                                      <div key={gIndex}>
                                        <p className="text-xl text-black-700 mb-1 font-medium">
                                          {group.subtitle}
                                        </p>

                                        <div className="space-y-2">
                                          {group.links.map((link, lIndex) => (
                                            <Link
                                              key={lIndex}
                                              href={link.href}
                                              className="block text-sm text-gray-700 hover:text-blue-600 transition"
                                            >
                                              {link.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* SIMPLE LINKS */}
                                {col.links && (
                                  <div className="space-y-2">
                                    {col.links.map((link, lIndex) => (
                                      <Link
                                        key={lIndex}
                                        href={link.href}
                                        className="block text-sm text-gray-300 hover:text-blue-600 transition"
                                      >
                                        {link.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}

                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}

            <Link href="/contact" className="hover:text-blue-600 transition">
              CONTACT
            </Link>
          </nav>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMobile(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobile && (
  <div
    className="fixed inset-0 bg-black/60 z-50"
    onClick={() => setMobile(false)}
  >
    <div
      className="absolute right-0 top-0 w-4/5 max-w-sm bg-white h-full p-5 overflow-y-auto overflow-x:hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="text-2xl mb-6"
        onClick={() => setMobile(false)}
      >
        <IoClose />
      </button>

      <div className="flex flex-col gap-5 text-sm">

        <Link href="/" className="font-semibold text-sm">
          Home
        </Link>

        {Object.entries(menus).map(([key, menu]) => (
          <details key={key} className="border-b pb-3">
            <summary className="cursor-pointer font-semibold text-sm">
              {menu.label}
            </summary>

            <div className="mt-3 ml-3 space-y-3">

              {menu.columns.map((col, idx) => (
                <div key={idx}>

                  <p className="text-sm font-medium text-gray-800">
                    {col.title}
                  </p>

                  {col.groups?.map((group, gIndex) => (
                    <div key={gIndex} className="ml-2 mt-2 space-y-1">

                      {group.subtitle && (
                        <p className="text-xs text-gray-500">
                          {group.subtitle}
                        </p>
                      )}

                      {group.links.map((link, lIndex) => (
                        <Link
                          key={lIndex}
                          href={link.href}
                          className="block text-xs text-gray-600 ml-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}

                  {col.links?.map((link, lIndex) => (
                    <Link
                      key={lIndex}
                      href={link.href}
                      className="block text-xs text-gray-600 ml-2"
                    >
                      {link.name}
                    </Link>
                  ))}

                </div>
              ))}

            </div>
          </details>
        ))}

        <Link href="/contact" className="font-semibold text-sm">
          Contact
        </Link>

      </div>
    </div>
  </div>
)}
    </>
  );
}