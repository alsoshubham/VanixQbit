import React from "react";

export default function Hero() {
  return (
    <section className="Hero-container bg-[#1b4332] text-white py-20 flex items-center min-h-[60vh]">
      <div className="w-full p-4 sm:p-8 flex flex-col items-start text-left max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
          Empower Vision Accelerate Growth
        </h1>
        <p className="text-green-200 text-lg mb-10 max-w-2xl">
          We help businesses scale through innovative tech,
          <br />
          strategic marketing, actionable insights, and financial precision.
        </p>
        <button className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:from-emerald-500 hover:to-green-400 hover:scale-105 transition-transform duration-200">
          Contact Sales
        </button>
      </div>
    </section>
  );
}

