// components/Certifications.tsx

export default function Certifications() {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">
        Quality & Certifications
      </h2>

      <div className="flex gap-6 flex-wrap">
        <img src="/iso.png" className="w-24" />
        <img src="/asme.png" className="w-24" />
        <img src="/lrqa.png" className="w-24" />
      </div>
    </section>
  )
}