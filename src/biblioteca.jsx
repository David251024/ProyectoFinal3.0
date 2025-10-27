import React, { useState } from 'react';
import './App.css';

// Importamos los datos de juegos (asumiendo que están en cards.jsx)
// Si los datos están en otro lugar, ajusta la importación
import { games } from './cards';

const BibliotecaJuegos = () => {
  const [filtroGenero, setFiltroGenero] = useState('');
  const [filtroPlatforma, setFiltroPlatforma] = useState('');
  const [ordenarPor, setOrdenarPor] = useState('titulo');

  // Extraer géneros y plataformas únicas para los filtros
  const generos = [...new Set(games.map(game => game.genre))];
  const plataformas = [...new Set(games.map(game => game.platform))];

  // Filtrar juegos según los criterios seleccionados
  const juegosFiltrados = games
    .filter(game => filtroGenero ? game.genre.includes(filtroGenero) : true)
    .filter(game => filtroPlatforma ? game.platform.includes(filtroPlatforma) : true)
    .sort((a, b) => {
      if (ordenarPor === 'titulo') return a.title.localeCompare(b.title);
      if (ordenarPor === 'rating') return b.rating - a.rating;
      if (ordenarPor === 'fecha') return new Date(b.release) - new Date(a.release);
      return 0;
    });

  return (
    <div className="biblioteca-container">
      <h1>Biblioteca de Juegos</h1>
      
      <div className="filtros-container">
        <div className="filtro">
          <label>Filtrar por género:</label>
          <select 
            value={filtroGenero} 
            onChange={(e) => setFiltroGenero(e.target.value)}
          >
            <option value="">Todos los géneros</option>
            {generos.map((genero, index) => (
              <option key={index} value={genero}>{genero}</option>
            ))}
          </select>
        </div>
        
        <div className="filtro">
          <label>Filtrar por plataforma:</label>
          <select 
            value={filtroPlatforma} 
            onChange={(e) => setFiltroPlatforma(e.target.value)}
          >
            <option value="">Todas las plataformas</option>
            {plataformas.map((plataforma, index) => (
              <option key={index} value={plataforma}>{plataforma}</option>
            ))}
          </select>
        </div>
        
        <div className="filtro">
          <label>Ordenar por:</label>
          <select 
            value={ordenarPor} 
            onChange={(e) => setOrdenarPor(e.target.value)}
          >
            <option value="titulo">Título</option>
            <option value="rating">Calificación</option>
            <option value="fecha">Fecha de lanzamiento</option>
          </select>
        </div>
      </div>
      
      <div className="juegos-grid">
        {juegosFiltrados.map(game => (
          <div key={game.id} className="juego-card">
            <img src={game.image} alt={game.title} />
            <div className="juego-info">
              <h3>{game.title}</h3>
              <p><strong>Género:</strong> {game.genre}</p>
              <p><strong>Plataforma:</strong> {game.platform}</p>
              <p><strong>Jugadores:</strong> {game.players}</p>
              <p><strong>Lanzamiento:</strong> {new Date(game.release).toLocaleDateString()}</p>
              <div className="rating">
                <span>★</span> {game.rating.toFixed(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {juegosFiltrados.length === 0 && (
        <p className="no-resultados">No se encontraron juegos con los filtros seleccionados.</p>
      )}
    </div>
  );
};

export default BibliotecaJuegos;