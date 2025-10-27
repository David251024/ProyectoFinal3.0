import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Fondo = () => {
  const particlesInit = async (main) => {
    // Carga completa del motor de partículas
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#0f172a", // Azul oscuro (puedes cambiarlo)
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Las partículas se apartan del mouse
        },
        onClick: {
          enable: true,
          mode: "push", // Agrega partículas al hacer clic
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#38bdf8", // Azul claro (puedes personalizarlo)
      },
      links: {
        color: "#38bdf8",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
};

export default Fondo;
