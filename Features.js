import React from "react";

function Features() {
  const items = [
    "Verifies business sustainability practices",
    "Answers your sustainability questions",
    "Recommends verified products & partners",
    "Learns from every verification to get smarter",
    "Provides personalized eco-friendly advice"
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-6">LoopAI Features</h2>
      <ul className="max-w-xl mx-auto space-y-4 text-left list-disc list-inside text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Features;