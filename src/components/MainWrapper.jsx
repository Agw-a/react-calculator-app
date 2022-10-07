import React from 'react';
import '../styles/wrapper.css';


const MainWrapper = ({components}) => {
  return (
    <div className='calculator-frame' >{components}</div>
  )
}

export default MainWrapper;