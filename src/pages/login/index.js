import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input } from "../../components/components"
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState("")
  return (
    <div className="containerLogin">
      <h1>Sign in to your Account</h1>
      <div>
        <Input
          type="email"
          className="email"
          placeholder="e-mail"
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          className="password"
          placeholder="password"
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Sign in</button>
      <span>Don't have an account? <Link to="/register">Create Account</Link></span>
    </div>
  );
}

export default Login;