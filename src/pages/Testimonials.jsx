export default function Testimonials() {
  return (
    <div>
      <section className="Credibility-Section bg-[#b7e4c7] text-green-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="uppercase text-sm font-medium tracking-widest text-[#2d6a4f] mb-2">
            By the numbers
          </p>
          <h2 className="text-4xl font-semibold mb-6 leading-tight">
            Powering ideas. Amplifying impact.
          </h2>
          <p className="text-[#2d6a4f] text-lg mb-8">
            From code to campaigns, VanixQbit helps visionaries build and grow
            with precision. Our work speaks in results—measurable, scalable,
            and lasting.
          </p>
          <img
            src="https://via.placeholder.com/400x200"
            alt="VanixQbit Impact Report"
            className="rounded-md shadow-md text-[#2d6a4f]"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 text-right">
          <div>
            <p className="text-5xl font-bold text-green-100">200+</p>
            <p className="mt-2 text-[#2d6a4f]">Brands launched</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-100">1.2M+</p>
            <p className="mt-2 text-[#2d6a4f]">Impressions delivered</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-100">500k+</p>
            <p className="mt-2 text-[#2d6a4f]">Lines of code</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-100">98%</p>
            <p className="mt-2 text-[#2d6a4f]">Client retention rate</p>
          </div>
        </div>
      </div>
    </section>
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
    </div>
    
  );
}
