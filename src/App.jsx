import './App.css'
import MainWrapper from './components/MainWrapper'
import Output from './components/output'
import Button from './components/button'
import ButtonWrap from './components/buttonWrap'


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
