import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">RoadGame</h1>
      <ul className="navbar-menu">
        <li><a href="#" className="navbar-link">Inicio</a></li>
        <li><a href="/carrera" className="navbar-link">Juego</a></li>
        <li><a href="#" className="navbar-link">Acerca</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
