"use client";

const videos = [
  // "dQw4w9WgXcQ",
  "n0U0DCwcHUo",
  "5TNTwMBV_wY",
  // "dQw4w9WgXcQ",
  "n0U0DCwcHUo",
   "n0U0DCwcHUo",
    "n0U0DCwcHUo",
  // "LXb3EKWsInQ",
  // "E7wJTI-1dvQ",
];

export default function Video() {
  // Duplicate list to create endless loop
  const loopList = [...videos, ...videos];

  return (
    <div className="scroll-container overflow-hidden whitespace-nowrap no-scrollbar bg-slate-100 py-8">
      <div className="marquee-track inline-flex space-x-6">

        {loopList.map((id, index) => (
          <div
            key={index}
            className="w-80 h-80 bg-white p-2 rounded-3xl shadow-md flex-shrink-0"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}`}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}

      </div>
    </div>
  );
}
