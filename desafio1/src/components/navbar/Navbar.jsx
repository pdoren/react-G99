import React from "react";

import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav class="navbar">
      <div class="menu1">
        <p>Pizzería Mamma Mía!</p>
        <ul>
          <li>🍕 Home</li>
          <li>{!token ? "🔐 Login": "🔓 Profile"}</li>
          <li>{!token ? "🔐 Register": "🔒 Logout"}</li>
        </ul>
      </div>
      <ul class="menu2">
        <li>🛒 Total: ${total.toLocaleString("es-CL")}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
