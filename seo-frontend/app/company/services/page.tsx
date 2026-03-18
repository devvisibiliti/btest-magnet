"use client"

import { motion } from "framer-motion"
import { FaCog, FaHammer, FaFlask, FaCheckCircle, FaTools } from "react-icons/fa"

// ✅ Fade Animation
const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

// ✅ Data with icons
const services = [
  {
    title: "Engineering",
    description:
      "Our engineering department comprises mechanical and chemical engineers ensuring project success.",
    points: [
      "25 Engineers",
      "3D Design Stations",
      "Thermal Calculations",
      "Finite Element Analysis"
    ],
    icon: FaCog
  },
  {
    title: "Manufacturing",
    description:
      "All equipment is manufactured entirely at our facilities with high precision.",
    points: [
      "7000m² Workshop",
      "25 Welders",
      "30 Machines",
      "Automatic Welding Systems"
    ],
    icon: FaHammer
  },
  {
    title: "Laboratory",
    description:
      "We test processes before production using advanced lab facilities.",
    points: [
      "Process Testing",
      "Modern Equipment",
      "Reliable Results"
    ],
    icon: FaFlask
  },
  {
    title: "Quality",
    description:
      "We follow strict international quality standards for all products.",
    points: [
      "ISO 9001",
      "ISO 14001",
      "ASME Certification"
    ],
    icon: FaCheckCircle
  },
  {
    title: "After-Sales",
    description:
      "We support you throughout the lifecycle of your equipment.",
    points: [
      "Maintenance Support",
      "Spare Parts",
      "Upgrades & Extensions"
    ],
    icon: FaTools
  }
]

// ✅ Main Page
export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <div className="h-[250px] bg-black text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold">SERVICES</h1>
        <p className="mt-3 text-gray-300 max-w-lg">
          We study your needs and provide the best solutions.
        </p>
      </div>

      {/* SERVICES */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <FadeIn key={index}>
              <div className="flex gap-6 mb-12 items-start">

                {/* 🔶 ICON BOX (like competitor) */}
                <div className="min-w-[80px] h-[80px] bg-yellow-500 flex items-center justify-center">
                  <Icon className="text-white text-3xl" />
                </div>

                {/* CONTENT */}
                <div className="bg-white p-6 rounded-lg shadow w-full">
                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-3">
                    {service.description}
                  </p>

                  <ul className="list-disc ml-5 text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeIn>
          )
        })}

      </div>

    </div>
  )
}