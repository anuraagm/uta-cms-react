import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./uta-logo.png";
import "./Header.css";
import HomeLinks from "../../atoms/navlinks/HomeLinks";
import StudentLinks from "../../atoms/navlinks/StudentLinks";
// import InstructorLinks from "../../atoms/navlinks/InstructorLinks"; // Import InstructorLinks
// import AdminLinks from "../../atoms/navlinks/AdminLinks"; // Import AdminLinks
// import QALinks from "../../atoms/navlinks/QALinks"; // Import QALinks
// import CoordinatorLinks from "../../atoms/navlinks/CoordinatorLinks"; // Import CoordinatorLinks

const Header = ({ landingRef, aboutRef, footerRef, userRole }) => { // Pass userRole as a prop
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Define a function to render the appropriate links based on the user role
  const renderLinks = () => {
    switch (userRole) {
      case "student":
        return <StudentLinks />;
      // case "instructor":
      //   return <InstructorLinks />;
      // case "admin":
      //   return <AdminLinks />;
      // case "qa":
      //   return <QALinks />;
      // case "coordinator":
      //   return <CoordinatorLinks />;
      default:
        return <HomeLinks landingRef={landingRef} aboutRef={aboutRef} footerRef={footerRef} />;
    }
  };

  return (
    <nav className="Header bg-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto mr-2 max-w-logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {renderLinks()} {/* Call the renderLinks function */}
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
          {renderLinks()} {/* Call the renderLinks function */}
        </div>
      )}
    </nav>
  );
};

export default Header;
