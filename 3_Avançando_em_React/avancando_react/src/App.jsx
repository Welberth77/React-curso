import { useState } from 'react'
// Styles
import './App.css'

// Importando imagem 
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'


function App() {
  const [count, setCount] = useState(0)

  const[name] = useState("Wel")

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={name} />
      {/* Desestruturando */}
      <CarDetails brand="VW" km={100000} color="Azul"/>
    </>
  )
}

export default App
