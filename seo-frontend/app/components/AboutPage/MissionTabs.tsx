"use client"

import { useState } from "react"

export default function MissionTabs() {
  const [tab, setTab] = useState("mission")

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">
        Mission, Vision & Values
      </h2>

      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("mission")}>Mission</button>
        <button onClick={() => setTab("vision")}>Vision</button>
        <button onClick={() => setTab("values")}>Values</button>
      </div>

      <div>
        {tab === "mission" && <p>Our mission is to improve processes...</p>}
        {tab === "vision" && <p>We aim to be global leader...</p>}
        {tab === "values" && (
          <ul>
            <li>✔ Quality</li>
            <li>✔ Innovation</li>
            <li>✔ Ethics</li>
          </ul>
        )}
      </div>
    </section>
  )
}