// Header.js
import React, { useState } from "react";
import logo from "./uta-logo.png";
import "./Header.css";
import HomeLinks from "../../atoms/navlinks/HomeLinks";

const Header = ({landingRef, aboutRef, footerRef}) => {

  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="Header bg-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <a href="/"> <img src={logo} alt="Logo" className="h-12 w-auto mr-2 max-w-logo" /></a>
        </div>
        <div className="hidden md:flex space-x-4">
          <HomeLinks landingRef={landingRef} aboutRef={aboutRef} footerRef={footerRef}/>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-500 py-4">
            <HomeLinks />
        </div>
        )}
    </nav>
  );
};

export default Header;
