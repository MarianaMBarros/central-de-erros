import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function Register() {
  return (
    <div className="App">

      <h1>Create Your Account</h1>
      <div>
        <input type="text" placeholder=" First name" />
        <input type="text" placeholder=" Last name" />
        <input type="text" placeholder="e-mail address" />
        <input type="text" placeholder="password" />
      </div>
      <button>Create Account</button>
      <p>Already have an account?</p>
      <Link to="/login">Sign in</Link>
    </div>
  );
}

export default Register;