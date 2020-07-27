import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { InputText, Button } from "../../components/components";
import logo from "../../img/logo.png";
import "../styles.css";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await api.post("accounts", data);

      alert("usuario criado com sucesso");
      history.push("/");
    } catch (error) {
      alert("ocorreu um erro ao tentar salvar os dados");
    }
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" className="img-logo" />
      <h1>Cadastro</h1>
      {/* <InputText type='text' placeholder='Nome*' value={name} onChange={e => setName(e.target.value)} /> */}
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
      <Button className="button" name="Cadastre-se" onClick={handleRegister} />
      <Link className="account" to="/login">
        Já tenho conta
      </Link>
    </div>
  );
}

export default Register;
