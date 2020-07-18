import React from 'react';
import './styles.css';

const InputText = (props) => {
  return (
    <input type={props.type} className={`input ${props.classInput}`} placeholder={props.placeholder} onChange={props.onChange} />
  )
}

export default InputText;


