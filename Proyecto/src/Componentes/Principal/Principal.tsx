import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar"; // Asegúrate de importar el Navbar
import "./Principal.css";

const PrincipalComponente = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500); // Cambia cada 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="principal-container">
      <Navbar /> {/* Aquí el navbar estará dentro del fondo */}

      <div className="overlay"></div>

      <div className="content">
        <h1>GANA UTILIZANDO TU PROPIA FUERZA</h1>
        <p className="subtitle">¿Qué hace de este juego especial?</p>

        <div className="info">
          <h2>ACTIVIDAD FÍSICA</h2>
          <p className="text-highlight-orange">Sensores EMG</p>
          <p className="description">
            La integración de EMG en juegos no solo mejorará la jugabilidad, sino que también fomentará la actividad física y la rehabilitación de manera entretenida.
          </p>

          <p className="text-highlight-orange">Elige a tu rival, personaje y juega</p>
          <p className="text-highlight-orange">Impresiona a la audiencia</p>
        </div>

        <p className="subtitle">
          ESPERANDO QUE LOS JUGADORES SE CONECTEN...
        </p>
      </div>
    </div>
  );
};

export default PrincipalComponente;
