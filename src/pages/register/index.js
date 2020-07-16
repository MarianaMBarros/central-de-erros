import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input } from "../../components/components"
import './styles.css';

function Register() {
  const [email, setEmail] = useState("")
  return (
    <div className="containerRegister">
      <h1>Create Your Account</h1>
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
      <button>Create Account</button>
      <p>Already have an account?</p>
      <Link to="/login">Sign in</Link>
    </div>
  );
}

export default Register;