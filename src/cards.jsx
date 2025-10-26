import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// =================================================================
// 1. DATA: const games 
// =================================================================
const games = [
    {
        id: 1,
        title: "Eclipse: Shadow Ops",
        genre: "Acción / Sigilo",
        platform: "PC / Consolas",
        players: "1 - 4",
        release: "2023-11-10",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1688139266113-d02336111e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTY1NzZ8MHwxfGFsbHx8fHx8fHx8fDE3MDAwMjY0MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: 2,
        title: "Neon Drift: Turbo",
        genre: "Carreras / Arcade",
        platform: "PC / Consolas",
        players: "1 - 8",
        release: "2024-06-21",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1515257857039-4403079b7b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTY1NzZ8MHwxfGFsbHx8fHx8fHx8fDE3MDAwMjY0MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: 3,
        title: "Leyendas de Arkan",
        genre: "MMO / Fantasía",
        platform: "PC",
        players: "1+",
        release: "2021-03-02",
        rating: 3.7,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4ed082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTY1NzZ8MHwxfGFsbHx8fHx8fHx8fDE3MDAwMjY0MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: 4,
        title: "Skyfront Bartenders",
        genre: "Estrategia / Multijugador",
        platform: "PC / Móviles",
        players: "2 - 16",
        release: "2021-03-02",
        rating: 1.7,
        image: "https://images.unsplash.com/photo-1542751371-adc365315053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTY1NzZ8MHwxfGFsbHx8fHx8fHx8fDE3MDAwMjY0MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: 5,
        title: "Circuit Breaker: Odyssey",
        genre: "Aventura / Puzzle",
        platform: "Consolas",
        players: "1 - 4",
        release: "2020-12-09",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1515257857039-4403079b7b90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTY1NzZ8MHwxfGFsbHx8fHx8fHx8fDE3MDAwMjY0MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: 6,
        title: "Cyber Harbor: Reload",
        genre: "Shooter / SciFi",
        platform: "PC / Consolas",
        players: "1 - 12",
        release: "2025-02-14",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTY1NzZ8MHwxfGFsbHx8fHx8fHx8fDE3MDAwMjY0MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    },
];

// =================================================================
// 2. FUNCIONES DE APOYO (Star y Stars)
// Se han adaptado a clases CSS puras para garantizar el tamaño
// =================================================================

function Star({ filled }) {
    const colorClass = filled === true 
        ? "star-full" 
        : filled === 'half' 
        ? "star-half" 
        : "star-empty";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`star-icon ${colorClass}`}
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
    );
}

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let filled = i <= full;
    if (i === full + 1 && half) {
      filled = 'half';
    } else if (i > full) {
      filled = false;
    }
    stars.push(<Star key={i} filled={filled} />);
  }

  return (
    <div className="stars-wrapper">
      {stars}
      <span className="rating-text">{value.toFixed(1)}</span>
    </div>
  );
}

// =================================================================
// 3. COMPONENTE PRINCIPAL (Función App)
// =================================================================

export default function App() {
  const [count, setCount] = useState(0)

  // Sub-componente que renderiza las tarjetas
  const GameCards = () => (
      <>
        <div className="cards-header">
            <h2 className="catalog-title">Catálogo - REACT ({games.length} juegos)</h2>
        </div>
        
        {/* Contenedor Grid para las 6 tarjetas */}
        <div className="grid-container">
            {games.map((g) => (
                <article 
                    key={g.id} 
                    className="card"
                >
                    {/* --- IMAGEN --- */}
                    <div className="card-image-wrapper">
                    <img 
                        src={g.image} 
                        alt={g.title} 
                        className="card-image" 
                    />
                    {/* Etiqueta de Género */}
                    <div className="card-genre-tag">
                        <span className="genre-text">{g.genre}</span>
                    </div>
                    </div>

                    {/* --- CUERPO Y ESPECIFICACIONES --- */}
                    <div className="card-body"> 
                        {/* Estrellas */}
                        <div className="rating-section">
                            <Stars value={g.rating} />
                        </div>
                        
                        {/* Título */}
                        <h3 className="card-title">{g.title}</h3>
                        
                        {/* Especificaciones */}
                        <ul className="card-specs">
                            <li><strong>Plataforma:</strong> {g.platform}</li>
                            <li><strong>Jugadores:</strong> {g.players}</li>
                            <li><strong>Fecha de lanzamiento:</strong> {g.release}</li>
                        </ul>

                        {/* Botones */}
                        <div className="card-buttons">
                            <button className="btn-spec">
                                Ver especificaciones
                            </button>
                            <button className="btn-add">
                                Agregar al servidor
                            </button>
                        </div>
                    </div>

                    {/* --- FOOTER --- */}
                    <footer className="card-footer">
                        Imágenes de ejemplo (Unsplash).
                    </footer>
                </article>
            ))}
        </div>
      </>
  );

  return (
    <div className="App"> 
      
      {/* 1. Catálogo de tarjetas de juego */}
      <GameCards />

      {/* 2. Contenido original de Vite/React */}
      <div className='vite-react-section'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        
        <div className="counter-card">
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
