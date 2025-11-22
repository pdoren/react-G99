import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

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
            <Link to="/" className="btn btn-outline-light py-1 px-2">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={!token ? "/login" : "/profile"}
              className="btn btn-outline-light py-1 px-2"
            >
              {!token ? "🔐 Login" : "🔓 Profile"}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={!token ? "/register" : "/login"}
              className="btn btn-outline-light py-1 px-2"
            >
              {!token ? "🔐 Register" : "🔒 Logout"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú derecho */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link
            to="/cart"
            className="btn btn-outline-secondary text-info border border-info py-1 px-2"
          >
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
