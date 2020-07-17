import React from 'react';
import { Link } from "react-router-dom";
import { Input, Button } from '../../components/components'
import './styles.css';

function Forgot() {
  return (
    <div className="containerForgot">
      <h1>Esqueceu sua senha?</h1>
      <span>Enviaremos um email para poder trocar sua senha.</span>
      <Input className='email' type='email' placeholder='Email*' />
      <Button className='button' name='Entrar' />
      <Link className='link' to="/">Voltar</Link>
    </div >
  );
}


export default Forgot;