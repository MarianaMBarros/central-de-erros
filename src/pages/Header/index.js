import React from 'react';
import user from '../../img/user.png';
import './styles.css';

const Header = () => {
  return (
    <>
      <header>
        <span>Bem Vindo: Mariana  </span>
        <span>Seu Token é: chsguysdgfygs </span>
        <img className='img' src={user} alt='user' />
      </header>
    </>
  )
}
export default Header;