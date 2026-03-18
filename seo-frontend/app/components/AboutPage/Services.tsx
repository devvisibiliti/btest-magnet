// components/Services.tsx

const services = [
  "Pressure Filtration",
  "Vacuum Drying",
  "Mixing & Homogenisation",
  "Processing Liquids",
  "Agitated Reactors",
]

export default function Services() {
  return (
    <section className="bg-gray-100 p-10">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="p-5 bg-white shadow rounded">
            {service}
          </div>
        ))}
      </div>
    </section>
  )
}