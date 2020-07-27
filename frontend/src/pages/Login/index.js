import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { InputText, Button } from "../../components/components";
import logo from "../../img/logo.png";
import "../styles.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await api.post("accounts/login", data);
      console.log(response);
      localStorage.setItem("@@central-accessToken", response.data.accessToken);
      localStorage.setItem("@@central-user-email", response.data.user.email);
      localStorage.setItem("@@central-user-token", response.data.user.token);

      history.push("/home");
    } catch (error) {
      alert("Login ou senha inválidos");
    }
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" className="img-logo" />
      <h1>Login</h1>
      <InputText
        type="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputText
        type="password"
        placeholder="Senha*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link className="forgot" to="/forgot">
        Esqueci minha Senha
      </Link>
      <Button className="button" name="Entrar" onClick={handleLogin} />
      <span> Não possui uma conta? </span>
      <Link className="register" to="/register">
        Cadastre-se
      </Link>
    </div>
  );
};

export default Login;
