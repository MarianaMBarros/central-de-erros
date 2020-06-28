import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function Forgot() {
  return (
    <div className="App">
      <h1>Forgot your password?</h1>
      <div>
        <p>
          Enter your account email address. We will send you a password recovery link.</p>
        <input type="text" placeholder="e-mail" />
      </div>
      <button>Submit</button>
      <p>Remember your password? <Link to="/login">Sing in</Link></p>
    </div>
  );
}

export default Forgot;