import React from 'react'
import './styles.scss';

function Button(props) {
  const { onClick, value } = props;
  return (
    <button className='buttonContainer' onClick={()=>onClick()}>
        <h3>{value}</h3>
    </button>
  )
}

export default Button;
