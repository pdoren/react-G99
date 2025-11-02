import React from "react";
import { useState } from "react";

import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    let message = "";

    if (!email || !password) {
      message += message!="" ? "\n": "";
      message += "Por favor completa todos los campos.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar correo electrónico

    if (!emailRegex.test(email)) {
      message += message!="" ? "\n": "";
      message += "Correo electrónico no válido.";
    }

    if (password.length < 6) {
      message += message!="" ? "\n": "";
      message += "Las contraseñas debe tener al menos 6 caracteres.";
    }

    if (message!="") {
      alert(message);
      setError(message);
      return;
    }

    console.log("Usuario logueado:", { email, password });

    setSuccess("✅ Ingreso exitoso!");
    alert("✅ Ingreso exitoso!");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-light py-5">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="********"
            />
          </div>

          {error && <p className="text-danger small text-center">{error}</p>}
          {success && (
            <p className="text-success small text-center">{success}</p>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
