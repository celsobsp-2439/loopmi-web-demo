import React from "react";

function Verification() {
  const steps = [
    { emoji: "📝", title: "Apply", desc: "Select your verification tier" },
    { emoji: "🔍", title: "Scan", desc: "LoopAI analyzes your website" },
    { emoji: "📋", title: "Review", desc: "Expert review (Gold+ only)" },
    { emoji: "📊", title: "Guidance", desc: "Improvement roadmap (Premium)" },
    { emoji: "🏆", title: "Badge", desc: "Receive your verification badge" }
  ];

  return (
    <section className="py-16 px-6 bg-green-50 text-center">
      <h2 className="text-2xl font-bold text-green-800 mb-8">Verification Process</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map((s, i) => (
          <div key={i} className="w-40 bg-white p-4 rounded shadow text-center">
            <div className="text-4xl">{s.emoji}</div>
            <div className="font-bold text-green-700 mt-2">{s.title}</div>
            <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Verification;