import React, { useState } from "react";
import Fondo from "./fondo"; // Asegúrate de que la ruta sea correcta
import GameCards from "./cards"; // Importamos el componente de tarjetas
import BibliotecaJuegos from "./biblioteca"; // Importamos el componente de biblioteca

function App() {
  const [vistaActual, setVistaActual] = useState("inicio"); // "inicio" o "biblioteca"

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
        </div>
        
        {/* Contenido condicional según la vista seleccionada */}
        <div style={{ marginTop: "2rem", padding: "0 2rem" }}>
          {vistaActual === "inicio" ? (
            <GameCards />
          ) : (
            <BibliotecaJuegos />
          )}
        </div>
      </div>
    </>
  );
}

export default App;









