import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { InputText, Button } from '../../components/components';
import logo from '../../img/logo.png';
import '../styles.css';

function Forgot() {
  const [email, setEmail] = useState("");

  const onClickLogin = () => {
    console.log(email);
  }
  return (
    <div className='container'>
      <img src={logo} alt='logo' className='img-logo' />
      <h1>Esqueceu sua senha?</h1>
      <span>Enviaremos um email para poder trocar sua senha.</span>
      <InputText type='email' placeholder='Email*' value={email} onChange={e => setEmail(e.target.value)} />
      <InputText type='email' placeholder='Email*' />
      <Button className='button' name='Entrar' />
      <Link className='link' to="/">Voltar</Link>
    </div >
  );
}

export default Forgot;