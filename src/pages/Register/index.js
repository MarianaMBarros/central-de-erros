import React from 'react';
import { Link } from 'react-router-dom';
import { InputText, Button } from '../../components/components'
import logo from '../../img/logo2.png'

import '../styles.css';

function Register() {
  return (
    <div className='container'>
      <img src={logo} />
      <h1>Cadastro</h1>
      <div>
        <InputText type='email' placeholder='Email*' />
        <InputText type='password' placeholder='Senha*' />
      </div>
      <Button className='button' name='Cadastre-se' />
      <Link className='account' to='/login'>Já possuo conta</Link>

    </div>
  );
}

export default Register;