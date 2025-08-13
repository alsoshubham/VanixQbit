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
	<div className="flex flex-col items-center text-center justify-between h-[380px] w-[300px] px-2 sm:px-4 md:px-6 py-6 mx-2 border-t border-b border-[#7f7122] bg-transparent">
		<h2 className="text-2xl font-semibold mb-4 leading-tight min-h-[40px] flex items-end justify-center">
			{title}
		</h2>
		<div className="overflow-hidden rounded-xl mb-3 shadow-lg transition-shadow duration-300 hover:shadow-2xl w-full flex justify-center h-[180px]">
			<img
				src={img}
				alt={alt}
				className="w-[260px] h-[180px] object-cover rounded-xl transition-transform duration-300 hover:scale-105 hover:brightness-90"
				loading="lazy"
				style={{ objectPosition: "center" }}
			/>
		</div>
		<p className="text-sm text-gray-800 min-h-[40px] flex items-start justify-center">
			{desc}
		</p>
	</div>
);
export default function Service() {
  return (
    <div>
      <section className="Service-container bg-white py-16 px-6 md:px-20">
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
            src={assets.team}
            alt="Team 1"
            className="rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    <section className="Features-container bg-white text-gray-800 py-10 sm:px-4 md:px-8 lg:px-16">
			<div className="relative overflow-x-hidden">
				<div
					className="flex items-center w-max animate-carousel"
					style={{ animation: "carousel 30s linear infinite" }}
				>
					{/* Duplicate features for seamless loop */}
					{[...features, ...features].map((feature, idx) => (
						<FeatureCard key={idx} {...feature} />
					))}
				</div>
			</div>
			{/* Carousel animation styles */}
			<style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          min-width: 200%;
        }
      `}</style>
		</section>
    </div>
  );
}
