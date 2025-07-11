"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Optional: Replace with inline SVG if avoiding this
import { Menu, X } from "lucide-react"; 

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/About" },
  { label: "SERVICE", path: "/Service" },
  { label: "CONTACT", path: "/Contact" },
];

const Navbar = ({
  logoSrc = "/img/new logo d2 (1).png",
  logoAlt = "Deckoid Logo",
  logoWidth = 90,
  logoHeight = 20,
  buttonText = "Let's Talk →",
  buttonLink = "https://wa.me/919586536724",
  bgColor = "#554469",
  hoverColor = "#B8895E",
  buttonColor = "#765583",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 px-4 py-2 shadow text-white font-semibold`} style={{ backgroundColor: bgColor }}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo (Left Side) */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            priority
          />
        </Link>

        {/* Desktop Nav (Right Side) */}
        <div className="hidden lg:flex items-center gap-6 text-lg tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className="transition hover:text-[#B8895E]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-1.5 rounded transition text-white"
            style={{ backgroundColor: buttonColor }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = hoverColor}
            onMouseOut={e => e.currentTarget.style.backgroundColor = buttonColor}
          >
            {buttonText}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-3 px-2 pb-4 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={toggleMenu}
              className="hover:text-[#B8895E]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-5 py-2 rounded transition text-white"
            style={{ backgroundColor: buttonColor }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = hoverColor}
            onMouseOut={e => e.currentTarget.style.backgroundColor = buttonColor}
          >
            {buttonText}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
