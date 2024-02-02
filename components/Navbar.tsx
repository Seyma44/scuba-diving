// Navbar.js
'use client'

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close when the menu icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll function
  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close the menu after clicking on a link
    }
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo-no-background.svg" alt="logo" width={100} height={40} />
      </Link>

      {/* Large Screen Menu */}
      <ul className="hidden lg:flex lg:gap-12">
        {NAV_LINKS.map((link) => (
          // Render the link only if it's not set to hide in the navbar
          !link.hideInNavbar && (
            <li key={link.key}>
              <a
                href={`#${link.key}`} // Linking to section IDs
                className="font-semibold text-turqu-700 flexCenter cursor-pointer pb-1.5 transition-all hover:font-extrabold"
                onClick={() => scrollToSection(link.key)} // Scroll to section on click
              >
                {link.label}
              </a>
            </li>
          )
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <Image 
            src="menu.svg"
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 h-screen w-full bg-white z-40 flex flex-col justify-center items-center">
          <button
            className="absolute top-3 right-3"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <Image
              src="close.svg"
              alt="Close Menu"
              width={24}
              height={24}
            />
          </button>
          <ul className="text-center">
            {NAV_LINKS.map((link) => (
              // Render the link only if it's not set to hide in the navbar
              !link.hideInNavbar && (
                <li key={link.key}>
                  <a
                    href={`#${link.key}`} // Linking to section IDs
                    className="font-semibold text-turqu-700 block py-2 transition-all hover:font-extrabold"
                    onClick={() => scrollToSection(link.key)} // Scroll to section on click
                  >
                    {link.label}
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


