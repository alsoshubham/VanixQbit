import { useState } from "react";
import PropTypes from "prop-types";
import DropdownProduct from "./DropdownProduct";
import DropdownSolutions from "./DropdownSolutions";
import DropdownResources from "./DropdownResources";

export default function Header({
  openMenu,
  setOpenMenu,
  handleMouseLeave,
  ArrowUp,
  ArrowDown,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className="fixed left-1/2 top-4 transform -translate-x-1/2 hidden md:flex items-center gap-5 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 shadow z-50"
        aria-label="Main navigation"
        style={{ minWidth: 400 }}
        role="navigation"
      >
        {/* Product Dropdown */}
        <div className="relative">
          <button
            className={
              "flex items-center gap-1 px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none" +
              (openMenu === "product" ? " underline" : "")
            }
            onMouseEnter={() => setOpenMenu("product")}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={openMenu === "product"}
          >
            Product {openMenu === "product" ? ArrowUp : ArrowDown}
          </button>
          {openMenu === "product" && <DropdownProduct />}
        </div>
        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            className={
              "flex items-center gap-1 px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none" +
              (openMenu === "solutions" ? " underline" : "")
            }
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={openMenu === "solutions"}
          >
            Solutions {openMenu === "solutions" ? ArrowUp : ArrowDown}
          </button>
          {openMenu === "solutions" && <DropdownSolutions />}
        </div>
        {/* Pricing (no dropdown) */}
        <button className="px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none">
          Pricing
        </button>
        {/* Resources Dropdown */}
        <div className="relative">
          <button
            className={
              "flex items-center gap-1 px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none" +
              (openMenu === "resources" ? " underline" : "")
            }
            onMouseEnter={() => setOpenMenu("resources")}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={openMenu === "resources"}
          >
            Resources {openMenu === "resources" ? ArrowUp : ArrowDown}
          </button>
          {openMenu === "resources" && <DropdownResources />}
        </div>
      </nav>
      {/* Hamburger for mobile */}
  <div className="md:hidden flex items-center fixed right-4 top-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md rounded-2xl mx-2 mt-20 shadow-lg fixed left-1/2 top-16 transform -translate-x-1/2 z-50 w-[90vw] max-w-md">
          <nav className="flex flex-col items-center space-y-3 py-4 px-4">
            <button
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </button>
            <button
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </button>
            <button
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </button>
            <button
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

Header.propTypes = {
  openMenu: PropTypes.string,
  setOpenMenu: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  ArrowUp: PropTypes.node.isRequired,
  ArrowDown: PropTypes.node.isRequired,
};
