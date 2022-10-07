import React from 'react';
import '../styles/buttonwrapper.css';

const ButtonWrap = (buttonComponents) => {
  return (
    <div className='button-wrapper' >
        {buttonComponents}
        </div>
  )
}

export default ButtonWrap;