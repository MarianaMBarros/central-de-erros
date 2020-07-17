import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../components/components'
import logo from '../../img/logo2.png'
import '../styles.css';

const Login = () => {
  return (
    <div className='container'>
      <img src={logo} />
      <h1>Login</h1>
      <div>
        <Input type='email' placeholder='Email*' />
        <Input type='password' placeholder='Senha*' />
      </div>
      <Link className='forgot' to='/forgot'>Esqueci minha Senha</Link>
      <Button className='button' name='Entrar' />
      <span>Não possui uma conta? <Link className='register' to='/register'>Cadastre-se</Link></span>
    </div>
  );
}

export default Login;