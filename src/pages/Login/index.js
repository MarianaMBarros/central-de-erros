import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputText, Button } from '../../components/components';
import logo from '../../img/logo.png';
import '../styles.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    history.push("/home")
  }

  return (
    <div className='container'>
      <img src={logo} alt='logo' className='img-logo' />
      <h1>Login</h1>
      <InputText type='email' placeholder='Email*' value={email} onChange={e => setEmail(e.target.value)} />
      <InputText type='password' placeholder='Senha*' value={password} onChange={e => setPassword(e.target.value)} />
      <Link className='forgot' to='/forgot'>Esqueci minha Senha</Link>
      <Button className='button' name='Entrar' onClick={onClickLogin} />
      <span> Não possui uma conta? </span>
      <Link className='register' to='/register'>Cadastre-se</Link>
    </div>
  );
}

export default Login;