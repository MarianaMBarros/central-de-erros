import React from 'react';
import './styles.css';

const InputText = ({ type, classInput, placeholder, value, onChange }) =>
  <input type={type} className={`input ${classInput}`} placeholder={placeholder} value={value} onChange={onChange} />

export default InputText;


