// HomeLinks.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../buttons/ButtonPrimary/ButtonPrimary";

const NavLink = ({ text, url }) => (
  <a href={url} className="block text-white p-2 hover:bg-blue-600">
    {text}
  </a>
);

const StudentLinks = ({}) => {
  const navigate = useNavigate();

  // Function to handle the "Logout" button click and navigate to "/"
  const handleLogoutClick = () => {
    // Use history to navigate to the "/" route
    navigate("/");
  };
  return (
    <>
      <div className="hidden md:flex space-x-4">
        <NavLink text="Profile" url="#" />
        <NavLink text="Grades" url="#" />
        <NavLink text="Messages" url="#" />
        <NavLink text="Course Catalogue" url="#" />
        <ButtonPrimary buttonText={"Logout"} clickFunction={handleLogoutClick}></ButtonPrimary>
      </div>
      <div className="md:hidden text-center">
        <NavLink text="Profile" url="#" />
        <NavLink text="Grades" url="#" />
        <NavLink text="Messages" url="#" />
        <NavLink text="Course Catalogue" url="#" />
        <ButtonPrimary buttonText={"Logout"} clickFunction={handleLogoutClick}></ButtonPrimary>
      </div>
    </>
  );
};

export default StudentLinks;
