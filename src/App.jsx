import React, { useState } from "react";
import Fondo from "./fondo"; // Asegúrate de que la ruta sea correcta
import GameCards from "./cards"; // Importamos el componente de tarjetas
import BibliotecaJuegos from "./biblioteca"; // Importamos el componente de biblioteca
import FormularioJuego from "./formulario"; // Importamos el componente de formulario
import { games } from "./cards"; // Importamos los juegos

function App() {
  const [vistaActual, setVistaActual] = useState("inicio"); // "inicio", "biblioteca" o "formulario"
  const [juegos, setJuegos] = useState(games); // Estado para los juegos
  const [juegoEditar, setJuegoEditar] = useState(null); // Juego a editar

  // Función para guardar un juego (nuevo o editado)
  const guardarJuego = (juego) => {
    if (juego.id && juegos.some(j => j.id === juego.id)) {
      // Actualizar juego existente
      setJuegos(juegos.map(j => j.id === juego.id ? juego : j));
    } else {
      // Agregar nuevo juego
      setJuegos([...juegos, juego]);
    }
    setVistaActual("biblioteca");
    setJuegoEditar(null);
  };

  // Función para cancelar la edición
  const cancelarEdicion = () => {
    setVistaActual("biblioteca");
    setJuegoEditar(null);
  };

  // Función para iniciar la edición de un juego
  const editarJuego = (juego) => {
    setJuegoEditar(juego);
    setVistaActual("formulario");
  };

  return (
    <>
      <Fondo />
      <div className="App">
        <h1 style={{ color: "white", textAlign: "center", marginTop: "5vh" }}>
          Bienvenido a mi Proyecto Final 3.0
        </h1>
        
        {/* Menú de navegación */}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <button 
            onClick={() => setVistaActual("inicio")}
            style={{ 
              margin: "0 1rem", 
              padding: "0.5rem 1rem", 
              backgroundColor: vistaActual === "inicio" ? "#4CAF50" : "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Inicio
          </button>
          <button 
            onClick={() => setVistaActual("biblioteca")}
            style={{ 
              margin: "0 1rem", 
              padding: "0.5rem 1rem", 
              backgroundColor: vistaActual === "biblioteca" ? "#4CAF50" : "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Biblioteca de Juegos
          </button>
          <button 
            onClick={() => {
              setJuegoEditar(null);
              setVistaActual("formulario");
            }}
            style={{ 
              margin: "0 1rem", 
              padding: "0.5rem 1rem", 
              backgroundColor: vistaActual === "formulario" ? "#4CAF50" : "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Agregar Juego
          </button>
        </div>
        
        {/* Contenido condicional según la vista seleccionada */}
        <div style={{ marginTop: "2rem", padding: "0 2rem" }}>
          {vistaActual === "inicio" ? (
            <GameCards />
          ) : vistaActual === "biblioteca" ? (
            <BibliotecaJuegos juegos={juegos} onEditarJuego={editarJuego} />
          ) : (
            <FormularioJuego 
              juegoEditar={juegoEditar} 
              onGuardar={guardarJuego} 
              onCancelar={cancelarEdicion} 
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;









