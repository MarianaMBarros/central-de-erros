import React from 'react';
import './styles.css';

const Checkbox = (props) => {
  return (
    <input type="checkbox" className={`ckeckbox ${props.classInput}`} />
  )
}
export default Checkbox;
