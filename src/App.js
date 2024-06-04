import React, { useState } from "react";
import github from "./svg/github.svg";
import facebook from "./svg/facebook.svg";
import google from "./svg/google.svg";
import linkedin from "./svg/linkedin.svg";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a className="icon" href="https://www.google.com">
              <img src={google} className="google-logo" alt="google" />
            </a>
            <a className="icon" href="https://www.facebook.com">
              <img src={facebook} className="facebook-logo" alt="facebook" />
            </a>
            <a className="icon" href="https://www.linkedin.com">
              <img src={linkedin} className="linkedin-logo" alt="linkedin" />
            </a>
            <a className="icon" href="https://www.github.com">
              <img src={github} className="github-logo" alt="github" />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <button type="button">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a className="icon" href="https://www.google.com">
              <img src={google} className="google-logo" alt="google" />
            </a>
            <a className="icon" href="https://www.facebook.com">
              <img src={facebook} className="facebook-logo" alt="facebook" />
            </a>
            <a className="icon" href="https://www.linkedin.com">
              <img src={linkedin} className="linkedin-logo" alt="linkedin" />
            </a>
            <a className="icon" href="https://www.github.com">
              <img src={github} className="github-logo" alt="github" />
            </a>
          </div>
          <span>or use your email</span>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <a href="A">Forget Your Password</a>
          <button type="button">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="Login" onClick={handleLoginClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button
              className="hidden"
              id="register"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
