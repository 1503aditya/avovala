import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

// 1. Import the logo image
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* 2. Logo Image Section */}
        {/* We use cursor-pointer so it feels interactive (optional: wrap in a link to top) */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
          <span className="flex items-center gap-2">
            <img
              src={logo}
              alt="Avowala Logo"
              className="h-12 w-auto object-contain"
            />
            <img
              src={logo1}
              alt="Avowala Logo 1"
              className="h-12 w-auto object-contain"
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className={`cursor-pointer font-medium hover:text-avo-light transition ${scrolled ? "text-gray-700" : "text-white shadow-sm"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={scrolled ? "text-gray-800" : "text-white"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 flex flex-col items-center space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
