import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputText, Button } from '../../components/components';
import logo from '../../img/logo.png';
import '../styles.css';

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickRegister = () => {
    history.push("/")
  }

  return (
    <div className='container'>
      <img src={logo} alt='logo' className='img-logo' />
      <h1>Cadastro</h1>
      <InputText type='text' placeholder='Nome*' value={name} onChange={e => setName(e.target.value)} />
      <InputText type='email' placeholder='Email*' value={email} onChange={e => setEmail(e.target.value)} />
      <InputText type='password' placeholder='Senha*' value={password} onChange={e => setPassword(e.target.value)} />
      <Button className='button' name='Cadastre-se' onClick={onClickRegister} />
      <Link className='account' to='/login'>Já tenho conta</Link>
    </div>
  );
}

export default Register;