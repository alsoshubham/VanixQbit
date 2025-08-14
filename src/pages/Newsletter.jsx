const Newsletter = () => {
  return (
  <div className="flex flex-col justify-center items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-700">
      <div className="w-full max-w-2xl px-4 py-16 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Sign up for our Newsletter</h1>
        <p className="text-xl text-white/90 text-center mb-8">Join Our Newsletter: Stay Updated, Exclusive Content, Sign Up</p>
        <form className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-md text-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <button
            type="submit"
            className="px-10 py-4 rounded-md text-lg font-semibold text-white bg-gradient-to-r from-emerald-800 to-teal-600 hover:from-emerald-900 hover:to-teal-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white/80 text-center text-base">
          We care about your data in our{' '}
          <a href="/privacy-policy" className="underline hover:text-white">privacy policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
