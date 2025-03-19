import React from "react";
import "./Principal.css"; // Importando los estilos

const PrincipalComponente = () => {
  return (
    <div className="principal-container">
      <div className="overlay"></div>

      <div className="content">
        <h1>GANA UTILIZANDO TU PROPIA FUERZA</h1>
        <p className="subtitle">¿Qué hace de este juego especial?</p>

        <div className="info">
          <h2>ACTIVIDAD FÍSICA</h2>
          <p className="text-highlight">Sensores EMG</p>
          <p className="description">
            La integración de EMG en juegos no solo mejorará la jugabilidad, sino que también fomentará la actividad física y la rehabilitación de manera entretenida.
          </p>

          <p className="text-highlight-orange">Elige a tu rival, personaje y juega</p>
          <p className="text-highlight-orange">Impresiona a la audiencia</p>
        </div>

        <p className="waiting">ESPERANDO QUE LOS JUGADORES SE CONECTEN...</p>
      </div>
    </div>
  );
};

export default PrincipalComponente;
