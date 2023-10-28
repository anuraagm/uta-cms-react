import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../buttons/ButtonPrimary/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthToken, clearUserRole } from "../../redux/authSlice";
import axios from 'axios';

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
  const api = process.env.REACT_APP_API_URL;
  const token = useSelector((state) => state.auth.authToken);

  const handleLogoutClick = () => {
    const formData = {
      token: token
    }
    axios.post(`${api}logout`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }) // Replace with your actual API endpoint
    .then((response) => {
      // Handle the response if needed
      dispatch(clearAuthToken());
      dispatch(clearUserRole());
    })
    .catch((error) => {
      console.error(error);
    });
    navigate("/");
    localStorage.setItem("view","Dashboard");
    localStorage.setItem("current","Dashboard");
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
