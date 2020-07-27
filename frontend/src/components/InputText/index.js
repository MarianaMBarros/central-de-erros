import React from 'react';
import './styles.css';

const InputText = ({ type, className, placeholder, value, onChange }) =>
  <input type={type} className={`input ${className}`} placeholder={placeholder} value={value} onChange={onChange} />

export default InputText;


