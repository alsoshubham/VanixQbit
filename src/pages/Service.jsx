export default function Service() {
  return (
    <section className="Service-container bg-[#95d5b2] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            End-to-End Execution. Zero Friction.
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            VanixQbit delivers full-spectrum tech, design, and marketing
            services for visionary teams building the future. From product
            development to brand storytelling and growth strategy, we
            streamline execution with a unified approach—so you move faster,
            smarter, and with impact.
          </p>
          <a
            href="#services"
            className="text-green-800 font-medium underline hover:text-green-600"
          >
            Explore our capabilities
          </a>
        </div>
        <div className="flex justify-center md:justify-start space-x-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Team 1"
            className="w-24 h-24 rounded-full object-cover"
            loading="lazy"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Team 2"
            className="w-24 h-24 rounded-full object-cover"
            loading="lazy"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Team 3"
            className="w-24 h-24 rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
