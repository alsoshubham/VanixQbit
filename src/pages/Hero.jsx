import { assets } from "../assets/assets";
export default function Hero() {
  return (
    <div>
      <section className="Hero-container bg-white text-white py-20 flex items-center min-h-[60vh]">
        <div className="w-full p-4 sm:p-8 flex flex-col items-start text-left max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl  text-gray-700 font-semibold mb-6 leading-tight">
            Empower Vision Accelerate Growth
          </h1>
          <p className="text-gray-700 text-lg mb-10 max-w-2xl">
            We help businesses scale through innovative tech,
            <br />
            strategic marketing, actionable insights, and financial precision.
          </p>
          <button className="bg-[#b7e4c7] text-[#1b4332] px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-200">
            Contact Sales
          </button>
        </div>
        <div>
          <img src={assets.bg_img1}/>
        </div>
      </section>
      <section className="Partners-container bg-white text-white py-12 px-2 sm:px-6 md:px-12 lg:px-20">
        <div className="Container mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 leading-tight text-center">
            Pioneering the future — VanixQbit unites with visionaries.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-0 sm:p-2 md:p-4 w-full max-w-5xl mx-auto">
            <img
              src={assets.p1}
              alt="Spillmate logo"
              className="w-full h-full object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={assets.p2}
              alt="SmartDMS logo"
              className="w-full h-full object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={assets.p3}
              alt="CODN logo"
              className="w-full h-auto object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={assets.p4}
              alt="Vanixqbit logo"
              className=" aspect-square w-full h-auto object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
