import React from 'react'
import './styles.css'

const InputText = (props) => {
  return (
    <input type='text' className={`input ${props.classInput}`} placeholder={props.placeholder} onChange={props.onChange} />
  )
}

export default InputText