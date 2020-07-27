import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import { InputText, Button } from "../../components/components";
import logo from "../../img/logo.png";
import "../styles.css";

function Forgot() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  async function handleRecover(e) {
    e.preventDefault();
    const data = {
      email,
    };
    try {
      const response = await api.post("accounts/recover-password", data);

      alert(`sua senha é ${response.data}`);
    } catch (error) {
      alert("ocorreu um erro ao tentar salvar os dados");
    }
  }
  return (
    <div className="container">
      <img src={logo} alt="logo" className="img-logo" />
      <h1>Esqueceu sua senha?</h1>
      <InputText
        type="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="button" name="Enviar" onClick={handleRecover} />
      <Link className="link" to="/">
        Voltar
      </Link>
    </div>
  );
}

export default Forgot;
