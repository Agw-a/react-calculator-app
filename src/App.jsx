import './App.css'
import MainWrapper from './components/MainWrapper'
import Output from './components/output'
import Button from './components/button'
import ButtonWrap from './components/buttonWrap'

const buttonValues = [
  ['C', '%', '<-', '/'],
  ['7', '8', '9', 'X'],
  ['4','5',, '6', '-'],
  ['1', '2', '3', '+'],
  ['00', '0', '.', '=']
];

export default function App() {

  const handleOnclick = () => {
    console.log(`${btn} clicked`)
  }
  return (
    <MainWrapper>
      <Output value = '0'/>
      <ButtonWrap>
        {
          buttonValues .flat().map((btn, i) => {
            return(
              <Button
              key={i}
              className={btn === '=' ? 'equals' : ''}
              value={btn}
              onClick={handleOnclick}
              />
            )
          })
        }
      </ButtonWrap>
        React ⚛️ + Vite ⚡ + Replit 🌀
    </MainWrapper>
      
    
    
  )
}
