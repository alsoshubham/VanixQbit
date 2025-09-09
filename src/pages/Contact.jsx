import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] bg-white px-2 md:px-[5vw] py-10 md:py-16 items-center justify-between">
      <div className="flex-1 max-w-xl w-full items-center">
        <h3 className="text-emerald-800 text-xl font-semibold mb-2">
          Get in touch
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Let’s Chat{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          Consultation Is Free!
        </h1>
        <p className="text-gray-500 text-base mb-8">
          Have questions or feedback? We're here to help. Send us a message, and
          we'll respond within 2 hours
        </p>
        <form className="flex flex-col gap-4 mb-8">
          <div>
            <label htmlFor="name" className="font-medium mb-1 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-medium mb-1 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 text-base min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-800 text-white font-semibold py-3 rounded-md transition-colors hover:bg-[#081C15] focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <img
          src={assets.contact}
          alt="Contact Illustration"
          className="max-w-3xl w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Contact;
