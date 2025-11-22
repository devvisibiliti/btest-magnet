"use client";

// export const metadata = {
//   title: "About Us | Your Brand",
//   description: "Learn more about our company, values, and mission.",
// };



import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  // simple fade animation
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[420px] w-full overflow-hidden">
        <Image
          src="/images/about/hero-industrial.jpg"
          alt="Magnetronix"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Magnetronix
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200 text-lg">
            Engineering precision. Delivering trust. Powering industrial safety.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
     {/* WHO WE ARE — IMAGE LEFT, TEXT RIGHT */}
<section
  className={`mx-auto max-w-6xl px-4 py-14 transition-all duration-700 ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT IMAGE */}
    <div className="relative w-full h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/images/about/about-us.jpg"   // ← replace with your own image
        alt="About Magnetronix"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>

    {/* RIGHT TEXT CONTENT */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
      <p className="max-w-4xl text-lg leading-relaxed text-gray-600">
        Magnetronix is a trusted name in industrial metal detection,
        inspection, and material management technologies. With years of
        engineering expertise, we design and manufacture solutions that help
        businesses improve product safety, reduce waste, and maintain
        compliance with global quality standards.
      </p>

      <p className="max-w-4xl text-lg leading-relaxed mt-4 text-gray-600">
        Our commitment to innovation drives us to deliver products that are
        reliable, efficient, and built for real-world industrial challenges.
        From food & beverage to pharmaceuticals, plastics, recycling, and
        FMCG industries—we empower businesses with advanced detection systems
        that ensure quality at every step.
      </p>
    </div>

  </div>
</section>


      {/* VISION + MISSION */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* VISION */}
          <div
            className={`rounded-2xl bg-gray-900 text-white p-8 shadow-xl transition-all duration-700 delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become India’s most trusted provider of industrial detection
              and inspection technologies—enabling safer products, smarter
              manufacturing, and sustainable process excellence across every
              industry we serve.
            </p>
          </div>

          {/* MISSION */}
          <div
            className={`rounded-2xl bg-blue-600 text-white p-8 shadow-xl transition-all duration-700 delay-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-100 text-lg leading-relaxed">
              To design and deliver high-performance detection systems that
              ensure safety, reduce risk, and optimize production efficiency—
              while offering unmatched customer support, innovation, and
              long-term value for every client.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Magnetronix?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Engineered Precision",
              desc: "Industry-leading systems designed for accuracy and reliability in every environment.",
            },
            {
              title: "Cutting-Edge Technology",
              desc: "Modern inspection and detection solutions built using advanced hardware and intelligent software.",
            },
            {
              title: "Dedicated Support",
              desc: "Comprehensive service, maintenance, and customer care for long-term operational success.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

