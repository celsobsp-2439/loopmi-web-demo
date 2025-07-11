import React from "react";
import Hero from "./components/Hero";
import Verification from "./components/Verification";
import Features from "./components/Features";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Hero />
      <Features />
      <Verification />
    </div>
  );
}

export default App;