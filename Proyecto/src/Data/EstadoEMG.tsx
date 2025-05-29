import { useEffect, useState } from "react";

export function useEMGEstado(pollingTime = 400) {
  const [estado, setEstado] = useState<string>("Sin datos");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/estado")
        .then(res => res.json())
        .then(data => setEstado(data.estado))
        .catch(() => setEstado("Sin conexión"));
    }, pollingTime);
    return () => clearInterval(interval);
  }, [pollingTime]);

  return estado;
}