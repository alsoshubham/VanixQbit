import { assets } from "../assets/assets";
export default function Hero() {
  return (
    <div>
      <section className="Hero-container bg-white text-white py-20 flex flex-col-reverse md:flex-row items-center min-h-[60vh] md:space-x-8">
        <div className="w-full p-4 sm:p-8 flex flex-col items-center text-left max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-6 leading-tight text-center">
            <b className="text-[#0d7752] text-4xl md:text-6xl font-bold">
              Empower
            </b>{" "}
            Vision Accelerate{" "}
            <b className="text-[#0d7752] text-4xl md:text-6xl font-bold">
              Growth
            </b>
          </h1>
          <div className="w-full flex justify-center mb-6 md:hidden">
            <img
              src={assets.bg_img1}
              alt="Empowering business growth - VanixQbit hero background"
              className="hero-img-responsive"
            />
          </div>
          <p className="text-gray-700 text-base sm:text-lg mb-10 max-w-2xl text-center">
            We help businesses scale through innovative tech,
            <br className="hidden sm:block" />
            strategic marketing, actionable insights, and financial precision.
          </p>
          <button className="bg-[#081c15] text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto">
            Let's Talk Growth
          </button>
        </div>
        {/* <div className="w-full justify-center mb-8 md:mb-0 md:w-auto hidden md:flex">
          <img
            src={assets.bg_img1}
            alt="Empowering business growth - VanixQbit hero background"
            className="hero-img-responsive"
          />
        </div> */}
      </section>
      <section className="Partners-container bg-white text-white py-12 px-2 sm:px-6 md:px-12 lg:px-20">
        <div className="Container mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6 leading-tight text-center">
            Pioneering the future — VanixQbit unites with visionaries.
          </h2>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-0 sm:p-2 md:p-4 w-full max-w-5xl mx-auto">
            <img
              src={assets.p1}
              alt="Spillmate - VanixQbit partner logo"
              className="w-full h-20 sm:h-24 md:h-28 object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={assets.p2}
              alt="SmartDMS logo"
              className="w-full h-20 sm:h-24 md:h-28 object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={assets.p3}
              alt="CODN logo"
              className="w-full h-20 sm:h-24 md:h-28 object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
            <img
              src={assets.p4}
              alt="Vanixqbit logo"
              className="aspect-square w-full h-20 sm:h-24 md:h-28 object-contain bg-[#081c15] rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
