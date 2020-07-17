import React from 'react'
import './styles.css'

const Input = (props) => {
  return (
    <input type={props.type} className={props.classInput} placeholder={props.placeholder} onChange={props.onChange} />
  )
}

export default Input