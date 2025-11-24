"use client";
// export const metadata = {
//   title: "Contact Us | Your Brand",
//   description: "Get in touch with us for queries, support, or services.",
// };

import Image from "next/image";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Integrate backend API here)");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative h-[300px] md:h-[420px] w-full overflow-hidden">
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Contact Magnetronix"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-gray-200 text-lg">
            Were here to assist with all your industrial detection needs.
          </p>
        </div>
      </section>

      {/* TOP CONTACT INFO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* PHONE */}
          <div className="bg-white shadow-md p-6 rounded-xl border flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
              <FiPhone className="text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white shadow-md p-6 rounded-xl border flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
              <FiMail className="text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-gray-600">support@magnetronix.com</p>
          </div>

          {/* ADDRESS */}
          <div className="bg-white shadow-md p-6 rounded-xl border flex flex-col items-center">
            <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
              <FiMapPin className="text-2xl" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Address</h3>
            <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
          </div>

        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT — CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 h-32 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT — MAP */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.394409861689!2d77.00397597479036!3d11.005547692167358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f6784c24b475%3A0x25fcf04e9860ecd1!2sCoimbatore!5e0!3m2!1sen!2sin!4v1707064218847"
            width="100%"
            height="100%"
            className="min-h-[350px] md:min-h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>
    </div>
  );
}
