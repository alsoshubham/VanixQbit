import { assets } from "../assets/assets";
const features = [
  {
    title: "Development",
    img: "https://images.unsplash.com/photo-1738255654134-1877cb984a8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNvZGUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Custom software development by VanixQbit",
    desc: "Build scalable, secure, and high-performance applications with our expert development team.",
  },
  {
    title: "Designing",
    img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Designing",
    desc: "Design intuitive and engaging user experiences that captivate your audience and drive results.",
  },
  {
    title: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Digital & Affiliate Marketing",
    desc: "Eliminate the heavy operational burden by launching or scaling your scout program.",
  },
  {
    title: "Performance Marketing",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZm9ybWFuY2UlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Performance Marketing",
    desc: "Replace subscription paperwork with flexible digital workflows that are custom to each LP.",
  },
  {
    title: "Accounting",
    img: "https://plus.unsplash.com/premium_photo-1679496829715-364b4a17e087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Accounting",
    desc: "We provide comprehensive accounting services to ensure your financial health and compliance.",
  },
  {
    title: "PRDs & Project Maintenance",
    img: "https://plus.unsplash.com/premium_photo-1726797661357-f7897f35f865?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
    alt: "PRDs and Project Maintenance",
    desc: "We create detailed Product Requirement Documents (PRDs) and maintain projects for long-term success.",
  },
  {
    title: "Infrastructure Setup",
    img: "https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    alt: "Infrastructure Setup",
    desc: "We set up robust IT infrastructure to support your business operations and growth.",
  },
];
const FeatureCard = ({ title, img, alt, desc }) => (
  <div className="flex flex-col justify-between bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs min-h-[370px] mx-auto transition-shadow duration-300 hover:shadow-xl">
    <div>
      <div className="w-full mb-4 flex justify-center">
        <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
      <h2 className="text-lg font-bold text-black mb-2 text-left">{title}</h2>
      <p className="text-gray-700 text-left mb-4 min-h-[60px]">{desc}</p>
    </div>
    <a
      href="#"
      className="text-emerald-800 font-semibold text-left hover:underline mt-auto"
    >
      Learn More
    </a>
  </div>
);
export default function Service() {
  return (
    <div>
      <section className="Service-container bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-500">
              Our Services{" "}
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              End-to-End Execution. Zero Friction.
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              VanixQbit delivers full-spectrum tech, design, and marketing
              services for visionary teams building the future. From product
              development to brand storytelling and growth strategy, we
              streamline execution with a unified approach—so you move faster,
              smarter, and with impact.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#services"
                className="text-green-800 font-medium underline hover:text-green-600"
              >
                Explore our capabilities
              </a>
              <button className="mt-4 px-6 py-2 bg-white border-2 border-b-emerald-700 text-black font-semibold rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <img
              src={assets.team}
              alt="Team 1"
              className="rounded-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="Features-container bg-white text-gray-800 py-10 sm:px-4 md:px-8 lg:px-16">
		<div className="text-center mb-8">
		  <h2 className="text-2xl font-semibold mb-4">Our Core Services</h2>
		  <h3 className="text-3xl font-bold mb-2">
			Empowering Your Digital Journey
		  </h3>
		  <p className="text-gray-600">
			We offer a comprehensive range of services to help you succeed in
			the digital landscape.
		  </p>
		</div>
        <div
          className="grid gap-8 w-full"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {features.map((feature, idx) => (
            <div className="flex w-full h-full"><FeatureCard key={idx} {...feature} /></div>
          ))}
        </div>
      </section>
    </div>
  );
}
