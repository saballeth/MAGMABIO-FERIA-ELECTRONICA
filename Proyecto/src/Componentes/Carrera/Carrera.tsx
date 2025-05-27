import React, { useEffect, useRef, useCallback, useState } from "react";

const skyColor = "#87ceeb";
const grassColor = "#4caf50";
const roadColor = "#2c3e50";
const lineColor = "white";
const centerLineColor = "yellow";

const carWidth = 50;
const carHeight = 40;
const carStep = 20; // Distancia que avanza cada vez

const RoadCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Estado para la posición X de los carros
  const [car1Pos, setCar1Pos] = useState(0); // Rojo
  const [car2Pos, setCar2Pos] = useState(0); // Azul
  const [winner, setWinner] = useState<string | null>(null);

  const drawRoad = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamaño del canvas al tamaño de la ventana
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const width = canvas.width;
    const height = canvas.height;

    // Fondo cielo y suelo
    ctx.fillStyle = skyColor;
    ctx.fillRect(0, 0, width, height / 2);
    ctx.fillStyle = grassColor;
    ctx.fillRect(0, height / 2, width, height / 2);

    // Parámetros de la carretera horizontal
    const roadHeight = height * 0.35;
    const roadTop = (height - roadHeight) / 2;
    const roadLeft = width * 0.05;
    const roadWidth = width * 0.9;

    // Dibujar carretera (rectángulo horizontal)
    ctx.fillStyle = roadColor;
    ctx.fillRect(roadLeft, roadTop, roadWidth, roadHeight);

    // Línea central discontinua (divide dos carriles)
    ctx.strokeStyle = centerLineColor;
    ctx.lineWidth = 4;
    ctx.setLineDash([30, 30]);
    ctx.beginPath();
    ctx.moveTo(roadLeft, roadTop + roadHeight / 2);
    ctx.lineTo(roadLeft + roadWidth, roadTop + roadHeight / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Línea de inicio
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(roadLeft + 10, roadTop);
    ctx.lineTo(roadLeft + 10, roadTop + roadHeight);
    ctx.stroke();

    // Línea de meta
    ctx.beginPath();
    ctx.moveTo(roadLeft + roadWidth - 10, roadTop);
    ctx.lineTo(roadLeft + roadWidth - 10, roadTop + roadHeight);
    ctx.stroke();

    // Texto "Meta"
    ctx.save();
    ctx.font = "bold 2.5rem Arial";
    ctx.fillStyle = "#f00";
    ctx.textAlign = "center";
    ctx.fillText(
      "Meta",
      roadLeft + roadWidth - 30,
      roadTop - 20
    );
    ctx.restore();

    // --- DIBUJAR LOS CARRITOS ---
    // Carril superior (Jugador 1 - rojo)
    const car1X = roadLeft + 30 + car1Pos;
    const car1Y = roadTop + roadHeight * 0.25 - carHeight / 2;

    // Carril inferior (Jugador 2 - azul)
    const car2X = roadLeft + 30 + car2Pos;
    const car2Y = roadTop + roadHeight * 0.75 - carHeight / 2;

    // Carrito 1 (rojo)
    ctx.fillStyle = "#e53935";
    ctx.fillRect(car1X, car1Y, carWidth, carHeight);

    // Carrito 2 (azul)
    ctx.fillStyle = "#1e88e5";
    ctx.fillRect(car2X, car2Y, carWidth, carHeight);

  }, [car1Pos, car2Pos, winner]);

  // Redibujar cuando cambian posiciones o tamaño
  useEffect(() => {
    drawRoad();
  }, [drawRoad]);

  // Manejar teclas y detectar ganador
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (winner) return; // No permitir mover si ya hay ganador

      const canvas = canvasRef.current;
      if (!canvas) return;
      const width = canvas.width;
      const roadLeft = width * 0.05;
      const roadWidth = width * 0.9;
      const metaX = roadLeft + roadWidth - 10 - carWidth;

      if (e.key === "r" || e.key === "R") {
        setCar1Pos((pos) => {
          const newPos = pos + carStep;
          if (roadLeft + 30 + newPos >= metaX) {
            setWinner("¡Ganó el carro ROJO!");
            return metaX - roadLeft - 30;
          }
          return newPos;
        });
      }
      if (e.key === "w" || e.key === "W") {
        setCar2Pos((pos) => {
          const newPos = pos + carStep;
          if (roadLeft + 30 + newPos >= metaX) {
            setWinner("¡Ganó el carro AZUL!");
            return metaX - roadLeft - 30;
          }
          return newPos;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [winner]);

  // Redibujar al cambiar tamaño de ventana
  useEffect(() => {
    const handleResize = () => drawRoad();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawRoad]);

  // Función para reiniciar la carrera
  const handleRestart = () => {
    setCar1Pos(0);
    setCar2Pos(0);
    setWinner(null);
  };

  return (
    <div className="road-container" style={{ position: "relative" }}>
      <canvas ref={canvasRef} className="road-canvas" />
      {winner && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(34,34,34,0.85)",
              padding: "2rem 3rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 32px #000a",
              textAlign: "center",
              pointerEvents: "auto",
            }}
          >
            <div style={{ color: "#facc15", fontSize: "2.2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
              {winner}
            </div>
            <button
              style={{
                fontSize: "1.3rem",
                padding: "0.7em 2em",
                borderRadius: "0.5em",
                border: "none",
                background: "#facc15",
                color: "#222",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onClick={handleRestart}
            >
              Reiniciar carrera
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadCanvas;