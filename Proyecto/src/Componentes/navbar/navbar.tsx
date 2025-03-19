import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-blue-200 transition duration-300">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-200 transition duration-300">Acerca de</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;