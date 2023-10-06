// HomeLinks.js
import React from "react";

const NavLink = ({ text, url }) => (
  <a href={url} className="block text-white p-2 hover:bg-blue-600">
    {text}
  </a>
);

const HomeLinks = ({landingRef, aboutRef, footerRef}) => {
  return (
    <>
      <div className="hidden md:flex space-x-4">
        <NavLink text="Service" url="#" />
        <NavLink text="About" url="#about" />
        <NavLink text="Contact Us" url="#footer" />
      </div>
      <div className="md:hidden">
        <NavLink text="Services" url="#" />
        <NavLink text="About" url="#about" />
        <NavLink text="Contact Us" url="#footer" />
      </div>
    </>
  );
};

export default HomeLinks;
