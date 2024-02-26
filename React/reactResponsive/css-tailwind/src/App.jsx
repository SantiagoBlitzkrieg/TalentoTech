import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(    <>
    <h1 className="bg-red-200" > Hola clase </h1>
    <table class="table-auto">
      <thead>
        <tr>
          <th>Album</th>
          <th>Artista</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vida</td>
          <td>Sui Generis</td>
          <td>Album debut de la banda. Folk Rock</td>
        </tr>
        <tr>
          <td>Pateando Piedras</td>
          <td>Los prisioneros</td>
          <td>Segundo album de estudio. New wave</td>
        </tr>
        <tr>
          <td>Artaud</td>
          <td>Pescado Rabioso</td>
          <td>Tercer y último album de estudio. Art Rock</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default App
