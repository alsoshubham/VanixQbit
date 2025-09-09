import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLinkedin, SiMedium } from "react-icons/si";
export default function Footer() {
  return (
  <footer className="bg-[#081c15] text-gray-300 py-12 px-6 md:px-20" aria-label="Footer">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
  <div>
          <h2 className="text-2xl font-bold text-white mb-4">VanixQbit</h2>
          <p className="text-sm text-gray-400">
            VanixQbit is a leading digital agency specializing in technology development, web design, digital marketing, SEO, cloud solutions, and accounting. We blend strategy, creativity, and technology to help brands unlock their potential and achieve sustainable business growth from idea to execution.
          </p>
        </div>
  <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm" aria-label="Services">
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
          <div className="space-y-2 text-sm flex flex-col" aria-label="Company">
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
            aria-label="Email info@vanixqbit.com"
          >
            info@vanixqbit.com
          </a>
          <a
            href="tel:+919876543210"
            className="text-sm text-gray-400 mb-4 block hover:text-white"
            aria-label="Call +91 98765 43210"
          >
            +91 98765 43210
          </a>
          <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FaFacebook size={24} alt="Facebook" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <FaTwitter size={24} alt="Twitter" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <FaInstagram size={24} alt="Instagram" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white" aria-label="Medium">
                <SiMedium size={24} alt="Medium" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <SiLinkedin size={24} alt="LinkedIn" />
              </Link>
            </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        This is an unofficial website of VanixQbit made only for project purposes. All rights for this is reserved to <a href="https://www.linkedin.com/in/alsoshubham" className="text-white">alsoshubham</a>
      </div>
    </footer>
  );
}
