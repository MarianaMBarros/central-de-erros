import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const Login = () => {
  return (
    <div className="containerLogin">
      <h1>Sign in to your Account</h1>
      <div>
        <input type="text" placeholder="e-mail" />
        <input type="text" placeholder="password" />
      </div>
      <Link to="/forgot">Forgot password?</Link>
      <button>Sign in</button>
      <p>Don't have an account? <Link to="/register">Create Account</Link></p>
    </div>
  );
}

export default Login;