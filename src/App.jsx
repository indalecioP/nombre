import { useState } from 'react'
import './App.css'
import Input from './Input'
import Boton from './Boton'
import Span from './Span'

function App() {
  const [nombre, setNombre] = useState('')

  return (
    <div>
      <h1>Escribe tu nombre</h1>
      <Input nom={setNombre} />
      <Boton nombre = {nombre} />
      <Span />
    </div>
  )
}

export default App
