import { useState } from 'react'

// Styles
import './App.css'

// Components
import FistComponent from './components/FistComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos</h1>
      <FistComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </>
  )
}

export default App
