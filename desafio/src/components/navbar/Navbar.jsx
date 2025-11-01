import React from "react";

import "./Navbar.css"

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand bg-dark text-white px-3 py-2">
      {/* Menú izquierdo */}
      <div className="d-flex align-items-center gap-3">
        <span className="fw-bold fs-6">🍕 Pizzería Mamma Mía!</span>

        <ul className="navbar-nav d-flex flex-row gap-2">
          <li className="nav-item">
            <span className="badge bg-secondary p-2">Home</span>
          </li>
          <li className="nav-item">
            <span className="badge bg-secondary p-2">
              {!token ? "🔐 Login" : "🔓 Profile"}
            </span>
          </li>
          <li className="nav-item">
            <span className="badge bg-secondary p-2">
              {!token ? "🔐 Register" : "🔒 Logout"}
            </span>
          </li>
        </ul>
      </div>

      {/* Menú derecho */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <span className="badge text-info border border-info p-2">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
