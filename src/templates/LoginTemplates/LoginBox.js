import React, { useState } from 'react';
import './LoginBox.css';

function LoginBox({toggleLoginPopup, toggleSignupPopup}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginBoxVisible, setIsLoginBoxVisible] = useState(true);
  const handleCloseButton = () => {
    // Toggle the visibility of the login box
    toggleLoginPopup()
    // setIsLoginBoxVisible(!isLoginBoxVisible);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    toggleSignupPopup();
    toggleLoginPopup();
    console.log('Signing up with:', email, password);
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot password for:', email);
  };

  return isLoginBoxVisible ? (
    <div className="login-box">
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
        id = 'email_'
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id = 'password_'
      />
      <br />
      <br />
      <button onClick={handleForgotPassword} id='forgot_password'>Forgot Password / username ?</button>
      <br />
      <button onClick={handleLogin} id='login_button'>Login</button>
      <br />
      <br />
      <button onClick={handleSignUp} id='signup_button'>Sign Up</button>
    </div>
  ) : null;
}

export default LoginBox;
