import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importa el componente GameCards
import GameCards from './cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // CAMBIO CLAVE: Aplicamos la clase que contiene el estilo Grid
    <div className="cards-container"> 
      
      {/* Muestra las cartas del catálogo */}
      <GameCards /> 

      {/* El resto del contenido original (Logos, contador, etc.) */}
      <div className='footer-container'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edita <code>src/App.jsx</code> y guarda para probar HMR
          </p>
        </div>
        <p className="read-the-docs">
          Haz clic en los logos de Vite y React para aprender más
        </p>
      </div>
    </div>
  )
}

export default App


  




