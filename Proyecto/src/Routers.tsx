import { Routes, Route } from "react-router-dom";
import Principal from "./Vistas/Principal";
import Navbar from "./Componentes/navbar/navbar"; 
import Carrera from "./Vistas/Carrera"

const Routers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <Routes>
          <Route path="*" element={<Principal />} />
          <Route path="/carrera" element={<Carrera />} />
        </Routes>
      </main>
    </div>
  );
};

export default Routers;