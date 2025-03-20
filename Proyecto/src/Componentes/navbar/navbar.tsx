import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Inicio</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
