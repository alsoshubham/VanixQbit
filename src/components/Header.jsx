import { useState } from "react";
import logo from "../assets/logo.svg";
import PropTypes from "prop-types";
import DropdownProduct from "./DropdownProduct";
import DropdownSolutions from "./DropdownSolutions";
import DropdownResources from "./DropdownResources";
import { Link } from "react-router-dom";

export default function Header({
  openMenu,
  setOpenMenu,
  handleMouseLeave,
  ArrowUp,
  ArrowDown,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 z-50">
      {/* Logo and Hamburger Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        <img src={logo} alt="Logo" className="h-[92px] w-auto object-contain" />
        {/* Hamburger only on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none p-2"
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
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="fixed left-1/2 top-4 transform -translate-x-1/2 hidden md:flex items-center gap-5 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 shadow z-50"
        aria-label="Main navigation"
        style={{ minWidth: 400 }}
        role="navigation"
      >
        {/* Product Dropdown */}
        <div
          className={"relative"}
          onMouseEnter={() => setOpenMenu("product")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={
              "flex items-center gap-1 px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none" +
              (openMenu === "product" ? " underline" : "")
            }
            aria-haspopup="true"
            aria-expanded={openMenu === "product"}
          >
            Product {openMenu === "product" ? ArrowUp : ArrowDown}
          </button>
          {openMenu === "product" && <DropdownProduct />}
        </div>
        {/* Solutions Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("solutions")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={
              "flex items-center gap-1 px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none" +
              (openMenu === "solutions" ? " underline" : "")
            }
            aria-haspopup="true"
            aria-expanded={openMenu === "solutions"}
          >
            Services {openMenu === "solutions" ? ArrowUp : ArrowDown}
          </button>
          {openMenu === "solutions" && <DropdownSolutions />}
        </div>
        {/* Pricing (no dropdown) */}
        <button className="px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none">
          Pricing
        </button>
        {/* Resources Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("resources")}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={
              "flex items-center gap-1 px-2 py-1 font-medium text-[#0f2518] hover:text-green-700 bg-transparent focus:outline-none" +
              (openMenu === "resources" ? " underline" : "")
            }
            aria-haspopup="true"
            aria-expanded={openMenu === "resources"}
          >
            Resources {openMenu === "resources" ? ArrowUp : ArrowDown}
          </button>
          {openMenu === "resources" && <DropdownResources />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md rounded-2xl mx-2 mt-2 shadow-lg">
          <nav className="flex flex-col items-center space-y-3 py-4 px-4">
            <Link
              to={"/product"}
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              to={"/services"}
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to={"/pricing"}
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to={"/resources"}
              className="w-full text-center text-[#0f2518] hover:text-green-700 transition-colors font-medium py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  openMenu: PropTypes.string,
  setOpenMenu: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  ArrowUp: PropTypes.node.isRequired,
  ArrowDown: PropTypes.node.isRequired,
};
