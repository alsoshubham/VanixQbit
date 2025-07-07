import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#081c15] text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">VanixQbit</h2>
          <p className="text-sm text-gray-400">
            VanixQbit is a full-stack business agency blending strategy,
            creativity, and tech to help brands unlock their potential—from
            idea to execution.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/product-development" className="hover:text-white">
                Product Development
              </Link>
            </li>
            <li>
              <Link to="/ui-ux-design" className="hover:text-white">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/growth-marketing" className="hover:text-white">
                Growth Marketing
              </Link>
            </li>
            <li>
              <Link to="/brand-strategy" className="hover:text-white">
                Brand Strategy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <div className="space-y-2 text-sm flex flex-col">
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            <Link to="/careers" className="hover:text-white">
              Careers
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Let’s Connect
          </h3>
          <a
            href="mailto:info@vanixqbit.com"
            className="text-sm text-gray-400 mb-4 block hover:text-white"
          >
            info@vanixqbit.com
          </a>
          <a
            href="tel:9990357676"
            className="text-sm text-gray-400 mb-4 block hover:text-white"
          >
            9990357676
          </a>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/"
              className="hover:text-white"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22,4.01c-0.77,0.34-1.6,0.57-2.47,0.67c0.89-0.54,1.57-1.4,1.89-2.42c-0.83,0.5-1.76,0.87-2.75,1.07C17.75,2.48,16.6,2,15.31,2c-2.43,0-4.4,1.97-4.4,4.4c0,0.35,0.04,0.7,0.12,1.03C7.24,7.27,4.15,5.48,2.2,2.9C1.82,3.57,1.59,4.33,1.59,5.14c0,1.53,0.78,2.88,1.97,3.67c-0.72-0.02-1.4-0.22-1.99-0.56v0.06c0,2.13,1.51,3.91,3.51,4.32c-0.37,0.1-0.76,0.15-1.17,0.15c-0.28,0-0.56-0.03-0.83-0.08c0.56,1.76,2.18,3.04,4.1,3.08c-1.5,1.18-3.39,1.89-5.45,1.89c-0.35,0-0.69-0.02-1.03-0.06C2.98,21.34,5.69,22.5,8.7,22.5c10.44,0,16.15-8.65,16.15-16.15c0-0.25-0.01-0.5-0.02-0.75C20.9,5.6,21.54,4.86,22,4.01z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              className="hover:text-white"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7zm13.5 10.3h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.3c.6-.8 1.5-1.3 2.5-1.3 1.9 0 3.5 1.6 3.5 3.5v5.5z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/"
              className="hover:text-white"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12,2C6.48,2,2,6.48,2,12c0,4.93,3.54,9.01,8.21,9.88v-6.99h-2.5v-2.89h2.5V9.5c0-2.47,1.49-3.83,3.77-3.83c1.09,0,2.24,0.2,2.24,0.2v2.46h-1.26c-1.24,0-1.63,0.77-1.63,1.56v1.87h2.77l-0.44,2.89h-2.33v6.99C18.46,21.01,22,16.93,22,12C22,6.48,17.52,2,12,2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2025 VanixQbit. All rights reserved.
      </div>
    </footer>
  );
}
