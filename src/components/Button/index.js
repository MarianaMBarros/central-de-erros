import React from 'react';
import './styles.css';

const Button = ({ classButton, value, name, onClick }) => {
  return (
    <button className={classButton} value={value} onClick={onClick}>{name}</button>
  )
}

export default Button;