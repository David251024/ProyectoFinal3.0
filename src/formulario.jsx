import React, { useState, useEffect } from 'react';
import './App.css';

const FormularioJuego = ({ juegoEditar, onGuardar, onCancelar }) => {
  // Estado inicial del formulario
  const juegoInicial = {
    id: null,
    title: '',
    genre: '',
    platform: '',
    players: '',
    release: '',
    rating: 0,
    image: ''
  };

  // Estado del formulario
  const [juego, setJuego] = useState(juegoInicial);
  const [errores, setErrores] = useState({});

  // Actualizar el formulario si se está editando un juego existente
  useEffect(() => {
    if (juegoEditar) {
      setJuego(juegoEditar);
    } else {
      setJuego(juegoInicial);
    }
  }, [juegoEditar]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJuego({
      ...juego,
      [name]: name === 'rating' ? parseFloat(value) : value
    });
  };

  // Validar el formulario antes de enviar
  const validarFormulario = () => {
    const nuevosErrores = {};
    
    if (!juego.title.trim()) nuevosErrores.title = 'El título es obligatorio';
    if (!juego.genre.trim()) nuevosErrores.genre = 'El género es obligatorio';
    if (!juego.platform.trim()) nuevosErrores.platform = 'La plataforma es obligatoria';
    if (!juego.players.trim()) nuevosErrores.players = 'El número de jugadores es obligatorio';
    if (!juego.release.trim()) nuevosErrores.release = 'La fecha de lanzamiento es obligatoria';
    if (juego.rating < 0 || juego.rating > 5) nuevosErrores.rating = 'La calificación debe estar entre 0 y 5';
    if (!juego.image.trim()) nuevosErrores.image = 'La URL de la imagen es obligatoria';
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      // Si es un nuevo juego, generar un ID único
      const juegoGuardar = juego.id 
        ? juego 
        : { ...juego, id: Date.now() };
      
      onGuardar(juegoGuardar);
      setJuego(juegoInicial);
    }
  };

  return (
    <div className="formulario-container">
      <h2>{juego.id ? 'Editar Juego' : 'Agregar Nuevo Juego'}</h2>
      
      <form onSubmit={handleSubmit} className="formulario-juego">
        <div className="campo-formulario">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={juego.title}
            onChange={handleChange}
            placeholder="Título del juego"
          />
          {errores.title && <span className="error">{errores.title}</span>}
        </div>

        <div className="campo-formulario">
          <label htmlFor="genre">Género:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={juego.genre}
            onChange={handleChange}
            placeholder="Ej: Acción / Aventura"
          />
          {errores.genre && <span className="error">{errores.genre}</span>}
        </div>

        <div className="campo-formulario">
          <label htmlFor="platform">Plataforma:</label>
          <input
            type="text"
            id="platform"
            name="platform"
            value={juego.platform}
            onChange={handleChange}
            placeholder="Ej: PC / Consolas"
          />
          {errores.platform && <span className="error">{errores.platform}</span>}
        </div>

        <div className="campo-formulario">
          <label htmlFor="players">Jugadores:</label>
          <input
            type="text"
            id="players"
            name="players"
            value={juego.players}
            onChange={handleChange}
            placeholder="Ej: 1 - 4"
          />
          {errores.players && <span className="error">{errores.players}</span>}
        </div>

        <div className="campo-formulario">
          <label htmlFor="release">Fecha de lanzamiento:</label>
          <input
            type="date"
            id="release"
            name="release"
            value={juego.release}
            onChange={handleChange}
          />
          {errores.release && <span className="error">{errores.release}</span>}
        </div>

        <div className="campo-formulario">
          <label htmlFor="rating">Calificación (0-5):</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={juego.rating}
            onChange={handleChange}
          />
          {errores.rating && <span className="error">{errores.rating}</span>}
        </div>

        <div className="campo-formulario">
          <label htmlFor="image">URL de la imagen:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={juego.image}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
          />
          {errores.image && <span className="error">{errores.image}</span>}
        </div>

        <div className="botones-formulario">
          <button type="submit" className="btn-guardar">
            {juego.id ? 'Actualizar' : 'Guardar'}
          </button>
          <button 
            type="button" 
            className="btn-cancelar" 
            onClick={onCancelar}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioJuego;