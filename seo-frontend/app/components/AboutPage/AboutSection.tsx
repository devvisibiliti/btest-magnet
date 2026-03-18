// components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section className="grid md:grid-cols-2 gap-10 p-10 items-center">
      
      <img
        src="/factory.jpg"
        className="rounded-lg shadow"
        alt="Company"
      />

      <div>
        <h2 className="text-2xl font-bold mb-4">About Us</h2>

        <p className="mb-3">
          We offer high-quality equipment and solutions for industrial processes.
        </p>

        <ul className="space-y-2">
          <li>✔ Pressure Filtration</li>
          <li>✔ Vacuum Drying</li>
          <li>✔ Mixing & Homogenisation</li>
          <li>✔ Process Equipment</li>
        </ul>
      </div>
    </section>
  )
}