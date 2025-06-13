import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-1">
          <div className="bg-white h-4 w-1.5 rounded-sm" />
          <div className="bg-white h-6 w-1.5 rounded-sm" />
          <div className="bg-white h-2 w-2 rounded-full ml-1" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:!flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm hover:text-gray-300 transition ${
                  link === "Home"
                    ? "bg-white text-black px-4 py-1.5 rounded-full"
                    : ""
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <button className="border hidden md:!flex border-white px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-black transition">
            HIRE ME
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black rounded-md px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className={`block text-sm ${
                link === "Home"
                  ? "bg-white text-black px-4 py-2 rounded-full"
                  : "hover:text-gray-300"
              }`}
            >
              {link}
            </a>
          ))}
          <button className="w-full border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
            HIRE ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
