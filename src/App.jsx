import { useState } from 'react'
import './App.css'
import Input from './Input'
import Boton from './Boton'
import Span from './Span'

function App() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  return (
    <div>
      <h3>Escribe tu nombre</h3>
      <Input nom={setNombre} />
      <Boton texto = {nombre} id ='s1' />
      <Span id = 's1' ti='aquí aparecerá tu nombre' />

      <h3>Escribe tu apellido</h3>
      <Input nom={setApellido} />
      <Boton texto = {apellido} id ='s2' />
      <Span id = 's2' ti='aquí aparecerá tu apellido' />
      <Boton texto = {nombre + ' ' + apellido} id ='s3' />
      <Span id = 's3' ti='aquí aparecerá tu nombre y apellido' />
    </div>
  )
}

export default App
