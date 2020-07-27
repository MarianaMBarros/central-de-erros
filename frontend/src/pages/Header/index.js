import React from "react";
import { useHistory } from "react-router-dom";

import user from "../../img/user.png";
import logo from "../../img/logo.png";
import "./styles.css";

const Header = () => {
  const history = useHistory();
  const email = localStorage.getItem("@@central-user-email");
  const token = localStorage.getItem("@@central-user-token");

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("@@central-accessToken");
    localStorage.removeItem("@@central-user-email");
    localStorage.removeItem("@@central-user-token");

    history.push("/");
  }

  return (
    <>
      <header>
        <div className="div-header-logo">
          <img src={logo} alt="logo" className="img-logo-header" />
          <div className="div-header">
            <span className="header">Bem Vindo: {email} </span>
            <span className="header">Seu Token é: {token} </span>
          </div>
        </div>
        {/* <img src={user} alt="user" className="img-header" /> */}
        <a href="" onClick={handleLogout}>
          sair
        </a>
      </header>
    </>
  );
};
export default Header;
