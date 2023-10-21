import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginBackgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/img/Gym.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
};

const containerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "400px",
  margin: "0 auto",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};

const inputStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "5px",
  width: "100%",
  marginBottom: "10px",
};

const labelStyle = {
  color: "#333",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#2196F3", // Azul
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
};

function Login() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreUsuario === "admin" && contrasena === "admin") {
      setError("");
      navigate("/ejercicios");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={loginBackgroundStyle} className="h-screen flex justify-center items-center">
      <div style={containerStyle}>
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-4">
            <label style={labelStyle}>Nombre de Usuario:</label>
            <input
              type="text"
              style={inputStyle}
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label style={labelStyle}>Contraseña:</label>
            <input
              type="password"
              style={inputStyle}
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Iniciar Sesión
          </button>
        </form>
        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
