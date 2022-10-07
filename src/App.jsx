import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [calc, setCalc] = useState('');
  const [res, setRes] = useState('');

  const ops = ['/' ,'*', '+', '-', '.']

  const updateCalc = (value) => {

    if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1)))
    {
      return;
    }
    setCalc(calc + value)

    if(!ops.includes(value))
    {
      setRes(eval(calc + value).toString())
    }
  }
  const createDigits = () => {
    const digits =[];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }

    return digits;
  }
  return (
    <div className='App' >
      <div className="calculator">
        <div className="display">
          {res ? <span>({res})</span> : ''} 
          {calc || '0'}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('=')}>=</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
