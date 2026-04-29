import { useState } from 'react'
import './App.css'
import Cadastro from './pagina/cadastro'
import Login from './pagina/login'

function App(){
  const [Tela, setTela] = useState('login')

  const trocarDeTela = (pagina) => {
    setTela (pagina)
  }

const renderizar = () =>{
  if(Tela === 'login'){
    return <Login/>
  } else if(Tela === 'cadastro'){
    return <Cadastro/>
  } else{
    return <Login/>
  }

}
return(
  <>

  <button onClick= {() => {trocarDeTela('cadastro')}}> Cadastro </button>
  <button onClick= {() => {trocarDeTela('login')}}> login </button>

  <hr />
  {renderizar()}
  </>
)
}
export default App
