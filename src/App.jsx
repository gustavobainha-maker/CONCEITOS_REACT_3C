import { useState } from 'react'
import './App.css'

function App(){
  const [carro, setcarro] = useState('BMW')
  function trocadecarro(){
    setcarro  ("Mustang")
  }
return(
  <>
  <h1>{carro}</h1>
  <button onClick= {trocadecarro} > trocar de carro </button>
  </>
)
}
export default App
