import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../buttons/ButtonPrimary/ButtonPrimary";
import { useDispatch } from "react-redux";
import { clearAuthToken } from "../../redux/authSlice";

const NavLink = ({ text, url, onClick }) => (

  <a
    href={url}
    className="block text-white p-2 hover:bg-blue-600"
    onClick={() => onClick(text)}
  >
    {text}
  </a>
);

const StudentLinks = ({ setOption }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch(clearAuthToken());
    navigate("/");
  };

  const handleNavLinkClick = (navText) => {
    setOption(navText);
  };

  return (
    <>
      <div className="hidden md:flex space-x-4">
        <NavLink text="Profile" url="#" onClick={handleNavLinkClick} />
        <NavLink text="Grades" url="#" onClick={handleNavLinkClick} />
        <NavLink text="Messages" url="#" onClick={handleNavLinkClick} />
        <NavLink text="Course Catalogue" url="#" onClick={handleNavLinkClick} />
        <ButtonPrimary buttonText={"Logout"} clickFunction={handleLogoutClick}></ButtonPrimary>
      </div>
      <div className="md:hidden text-center">
        <NavLink text="Profile" url="#" onClick={handleNavLinkClick} />
        <NavLink text="Grades" url="#" onClick={handleNavLinkClick} />
        <NavLink text="Messages" url="#" onClick={handleNavLinkClick} />
        <NavLink text="Course Catalogue" url="#" onClick={handleNavLinkClick} />
        <ButtonPrimary buttonText={"Logout"} clickFunction={handleLogoutClick}></ButtonPrimary>
      </div>
    </>
  );
};

export default StudentLinks;
