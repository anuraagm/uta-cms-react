import React, { useState } from 'react';
import './LoginBox.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthToken, setUserRole } from '../../redux/authSlice';

function LoginBox({toggleLoginPopup, toggleSignupPopup}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginBoxVisible, setIsLoginBoxVisible] = useState(true);
  const api = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const handleCloseButton = () => {
    // Toggle the visibility of the login box
    toggleLoginPopup()
    // setIsLoginBoxVisible(!isLoginBoxVisible);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    if (email !== "" && password !== "") {
      const formData = {
        email: email,
        password: password
      }
      axios.post(`${api}login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }) // Replace with your actual API endpoint
      .then((response) => {
        // Handle the response if needed
        const token = response.data.data;
        console.log(token);
        const tok = JSON.parse(atob(token.split('.')[1]));
        dispatch(setAuthToken(token));
        dispatch(setUserRole(tok.role));
      })
      .catch((error) => {
        console.error(error);
      });
      toggleLoginPopup();
    }
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    toggleSignupPopup();
    toggleLoginPopup();
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot password for:', email);
  };

  return isLoginBoxVisible ? (
    <div className="login-box">
      <form action=''>
        <button className="close-button" onClick={handleCloseButton}>X</button>
        <h1 className='bg-blue text-white p-4 text-lg'>UTA Login</h1>
        <br />
        <h2>Please login/signup to continue</h2>
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className = 'email_'
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className = 'password_'
          required
        />
        <br />
        <br />
        <button onClick={handleForgotPassword} className='forgot_password'>Forgot Password / username ?</button>
        <br />
        <button onClick={handleLogin} className='login_button'>Login</button>
        <br />
        <br />
        <button onClick={handleSignUp} className='signup_button'>Sign Up</button>
      </form>
    </div>
  ) : null;
}

export default LoginBox;
