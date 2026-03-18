// components/Hero.tsx

export default function Hero() {
  return (
    <section
      className="h-[60vh] flex items-center justify-center text-white relative"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center">
        <h1 className="text-4xl font-bold">COMPANY</h1>
        <p className="mt-4 max-w-xl">
          Industrial engineering company specialising in process equipment
        </p>
      </div>
    </section>
  )
}