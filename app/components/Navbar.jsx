  "use client";

  import Image from "next/image";
  import Link from "next/link";
  import { useState } from "react";
  import { Menu, X } from "lucide-react"; 

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/About" },
    { label: "Service", path: "/Service" },
    { label: "Blog", path: "/Blog" },
  ];

  const Navbar = ({
    logoSrc = "/img/new logo d2 (1).png",
    logoAlt = "Deckoid Logo",
    logoWidth = 90,
    logoHeight = 20,
    bgColor = "#554469",
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
      <nav
        className="fixed w-full z-50 px-4 py-2 shadow text-white font-semibold h-[80px]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-between items-center mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4 lg:ml-28 lg:mr-4">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
              priority
            />
          </Link>

          {/* Desktop Nav */}
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
              href="/Contact"
              className="ml-4 px-6 py-2 rounded-full text-white text-base font-bold shadow-lg bg-gradient-to-r from-[#B8895E] to-[#8C5D8A] hover:brightness-110 transition-all duration-300"
            >
              LET'S TALK →
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={34} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col gap-4 mt-3 px-2 pb-4 text-lg font-semibold tracking-wide">
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
              href="/Contact"
              onClick={toggleMenu}
              className="text-center px-6 py-2 rounded-full font-bold shadow-md bg-gradient-to-r from-[#B8895E] to-[#8C5D8A] hover:brightness-110 transition-all duration-300"
            >
              LET'S TALK →
            </a>
          </div>
        )}
      </nav>
    );
  };

  export default Navbar;
