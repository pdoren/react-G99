import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="bg-dark text-white text-center py-5">
      <h1 className="fw-bold">¡Pizzería Mama Mia!</h1>
      <p className="border-bottom border-secondary pb-2 mx-auto w-75">
        ¡Tenemos las mejores pizzas que podrías encontrar!
      </p>
    </header>
  );
};

export default Header;
