import React from "react";

import "./CardPizza.css";

export default function CardPizza({name, price, ingredients, img}) {
   return (
    <div className="card-pizza">
      <img className="card-pizza-img" src={img} alt={`Pizza ${name}`} />

      <div className="card-pizza-body">
        <div className="card-pizza-title">
          <h2>Pizza {name}</h2>
        </div>

        <div className="card-pizza-ingredients">
          <h3>Ingredientes:</h3>
          <p>🍕 {ingredients.join(", ")}</p>
        </div>

        <p className="card-pizza-price">Precio: ${price.toLocaleString("es-CL")}</p>

        <div className="buttons">
          <button className="card-ver-mas">Ver Más 👀</button>
          <button className="card-pizza-btn">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

