import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo2 from './components/Saludo'

function Saludo(params){
  return(
    <h1>Soy El primer componente "saludo"</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Saludo/>
      <Saludo2/>
    </>
  )
}

export default App
