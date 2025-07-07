import React from "react";

export default function Testimonials() {
  return (
    <section className="Testimonials-container bg-[#d8f3dc] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          What our clients say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              "VanixQbit transformed our vision into reality. Their team is
              not just skilled but truly invested in our success."
            </p>
            <p className="font-semibold">- Client Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              "The level of expertise and dedication from VanixQbit is
              unmatched. They helped us scale our operations seamlessly."
            </p>
            <p className="font-semibold">- Client Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4">
              "Working with VanixQbit was a game-changer for our business.
              Their holistic approach to tech and marketing is exactly what we
              needed."
            </p>
            <p className="font-semibold">- Client Name</p>
          </div>
        </div>
      </div>
    </section>
  );
}
