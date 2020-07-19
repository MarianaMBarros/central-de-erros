import React from 'react';
import user from '../../img/user.png';
import logo from '../../img/logo.png';
import './styles.css';

const Header = () => {
  return (
    <>
      <header>
        <div className='div-header-logo'>
          <img src={logo} alt='logo' className='img-logo-header' />
          <div className='div-header'>
            <span className='header'>Bem Vindo: Mariana  </span>
            <span className='header'>Seu Token é: chsguysdgfygs </span>
          </div>
        </div>
        <img src={user} alt='user' className='img-header' />
      </header>
    </>
  )
}
export default Header;