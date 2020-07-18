import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button className={props.classButton} value={props.value}>{props.name}</button>
  )
}

export default Button;