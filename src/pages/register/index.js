import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../components/components'
import logo from '../../img/logo2.png'
import '../styles.css';

function Register() {
  return (
    <div className='container'>
      <img src={logo} />
      <h1>Cadastro</h1>
      <div>
        <Input type='email' className='email' placeholder='Email*' />
        <Input type='password' className='password' placeholder='Senha*' />
      </div>
      <Button className='button' name='Cadastre-se' />
      <Link className='account' to='/login'>Já possuo conta</Link>

    </div>
  );
}

export default Register;