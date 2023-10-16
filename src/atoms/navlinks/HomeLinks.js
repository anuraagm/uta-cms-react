// HomeLinks.js
import React from "react";

const NavLink = ({ text, url, isBlog }) => (
  <a href={url} className="block text-white p-2 hover:bg-blue-600" target={isBlog ? "_blank" : null} rel={isBlog ? "noopener noreferrer" : null}>
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
        <NavLink text="Blog" url="/blog" isBlog={true} />
      </div>
      <div className="md:hidden text-center">
        <NavLink text="Services" url="#" />
        <NavLink text="About" url="#about" />
        <NavLink text="Contact Us" url="#footer" />
        <NavLink text="Blog" url="/blog" isBlog={true} />
      </div>
    </>
  );
};

export default HomeLinks;
