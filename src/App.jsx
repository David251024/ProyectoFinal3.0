import React from "react";
import Fondo from "./fondo"; // Asegúrate de que la ruta sea correcta
import GameCards from "./cards"; // Importamos el componente de tarjetas

function App() {
  return (
    <>
      <Fondo />
      <div className="App">
        <h1 style={{ color: "white", textAlign: "center", marginTop: "5vh" }}>
          Bienvenido a mi Proyecto Final 3.0
        </h1>
        <div style={{ marginTop: "2rem", padding: "0 2rem" }}>
          <GameCards />
        </div>
      </div>
    </>
  );
}

export default App;









