import React, { useEffect, useState } from "react";
import "./AddUser.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthToken, setUserRole } from '../../redux/authSlice';

function AddUser({setBoxVisibility}) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [popUp, togglePopup] = useState(true);
  const api = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();

  useEffect(() => {
    if (password === confirmPassword && password !== "" && confirmPassword !== "") {
      setConfirmMessage(true);
    }
    else {
      setConfirmMessage(false);
    }
  },[confirmPassword])


  const handleCloseButton = () => {
    // Toggle the visibility of the Signup box
    togglePopup(!popUp);
    window.location.reload();
  };

  const handleCreate = (event) => {
    event.preventDefault();
    // Add your Signup logic here
    if (confirmMessage && firstname !== "" && lastname !== "" && phone !== "" && email !== "") {
      console.log("Signup initiated");

      const formData = {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
        role: userRole,
      }
      axios.post(`${api}createUser`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }) // Replace with your actual API endpoint
      .then((response) => {
        // Handle the response if needed
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
      togglePopup();
    } 
  };


  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log("Forgot password for:", email);
  };

  return popUp ? (
    <div className="create-box">
      <form action="">
        <button className="close-button" onClick={handleCloseButton}>X</button>
        <h1 className='bg-blue text-white p-4 text-lg'>Add New User</h1>
        <br />
        <h2>Please enter the details </h2>
        <br />
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          className="email_"
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          className="email_"
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="email_"
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email_"
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password_"
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {setConfirmPassword(e.target.value);}}
          className="password_"
        />
        <select
            name="role"
            value={userRole}
            onChange={(e) => {setUserRole(e.target.value);}}
            className="email_ mt-8"
            required
            >
            <option value="" disabled>Select</option>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Admin">Admin</option>
            <option value="ProgramCoordinator">ProgramCoordinator</option>
            <option value="QA">QA</option>
        </select>
        {
          !confirmMessage && <h1>Both passwords should match</h1>
        }
        <br />
        <br />
        <button onClick={handleCreate} className="login_button">
          Create
        </button>
        <br />
      </form>
    </div>
  ) : null;
}

export default AddUser;
