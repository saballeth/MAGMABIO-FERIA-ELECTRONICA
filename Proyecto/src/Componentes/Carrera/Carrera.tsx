import React from "react";
import "./Carrera.css";

const Carrera = () => {
  return (
    <div className="carrera-container">
      <h2 className="title">
        ¡Es hora de moverse! <br />
        <span className="subtitle">El que primero llegue gana!</span>
      </h2>

      <div className="road">
        {/* Inicio */}
        <div className="point start">
          <div className="circle">Inicio</div>
        </div>

        {/* Punto 1 */}
        <div className="point point-1">
          <div className="pin pin-orange">01</div>
          <p className="text text-orange">Pareces primíparo</p>
        </div>

        {/* Punto 2 */}
        <div className="point point-2">
          <div className="pin pin-brown">02</div>
          <p className="text text-brown">Apenas vas por segundo semestre</p>
        </div>

        {/* Punto 3 */}
        <div className="point point-3">
          <div className="pin pin-yellow">03</div>
          <p className="text text-yellow">Estás tomando forma</p>
        </div>

        {/* Punto 4 */}
        <div className="point point-4">
          <div className="pin pin-blue">04</div>
          <p className="text text-blue">¡Ya casi!</p>
        </div>

        {/* Final */}
        <div className="point end">
          <div className="circle">Final</div>
        </div>
      </div>
    </div>
  );
};

export default Carrera;
