import React, { useEffect, useState } from "react";
import "./LoginBox.css";

function SignupBox({toggleSignupPopup, toggleLoginPopup}) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [isSignupBoxVisible, setIsSignupBoxVisible] = useState(true);

  useEffect(() => {
    if (password === confirmPassword && password !== "") {
      setConfirmMessage(true);
    }
    else {
      setConfirmMessage(false);
    }
  },[confirmPassword])

  const handleCloseButton = () => {
    // Toggle the visibility of the Signup box
    toggleSignupPopup();
  };

  const handleCancelButton = () => {
    // Toggle the visibility of the Signup box
    toggleLoginPopup();
    toggleSignupPopup();
  };

  const handleSignup = () => {
    // Add your Signup logic here
    if (confirmMessage) {
      console.log("Logging in with:", email, password);
    } 
  };


  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log("Forgot password for:", email);
  };

  return isSignupBoxVisible ? (
    <div className="Signup-box">
      <button className="close-button" onClick={handleCloseButton}>X</button>
      <h1 className='bg-blue text-white p-4 text-lg'>UTA Signup</h1>
      <br />
      <h2>Please signup to continue</h2>
      <br />
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        id="email_"
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        id="email_"
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        id="email_"
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email_"
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password_"
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="confirm Password"
        value={confirmPassword}
        onChange={(e) => {setConfirmPassword(e.target.value);}}
        id="password_"
      />
      {
        !confirmMessage && <h1>Both passwords should match</h1>
      }
      <br />
      <br />
      <button onClick={handleSignup} id="login_button">
        Signup
      </button>
      <br />
      <br />
      <button onClick={handleCancelButton} id="signup_button">
        Cancel
      </button>
    </div>
  ) : null;
}

export default SignupBox;
