"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductDetails({ product }) {
  console.log(product);
  return (

    <>
    
    <div className="max-w-7xl mx-auto px-6 py-16">
     

      {/* HERO SECTION */}

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}

        <div className="flex justify-center">
         {product.imageUrl && (
           <Image
            src={product.imageUrl || "/no-image.png"}
            width={500}
            height={500}
            alt={product.title}
            className="rounded-lg object-contain"
          />
         )}
        </div>

        {/* TEXT */}

        <div>

          {/* title from backend contains HTML */}

          <div
            className="text-4xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: product.title }}
          />

          <div
            className="text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: product.mainDescription }}
          />

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded">
            Request a Quote
          </button>
        </div>

      </div>

      {/* DESCRIPTION */}

      <div
        className="mt-16 text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />

      {/* ACCORDION */}

      <div className="mt-16 space-y-4">

        <Accordion title="Advantages" items={product.advantages} />

        <Accordion title="Features" items={product.features} />

        <Accordion title="Typical Application" items={product.options} />
        

      </div>
      {/* <div
        className="mt-16 text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: product.stock }}
      /> */}
      <div className="flex justify-center mt-10">
  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded">
    Request a Quote
  </button>
</div>

    </div>
    
      
    
    
    </>
    
    
  );
}

function Accordion({ title, items }) {
  const [open, setOpen] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div className="border rounded-lg">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 font-semibold text-left"
      >
        {title}

        <span className="text-xl">
          {open ? "-" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6">

          <ul className="list-disc space-y-2 text-gray-700">
  {Array.isArray(items) &&
    items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
</ul>

        </div>
      )}
    </div>
  );
}