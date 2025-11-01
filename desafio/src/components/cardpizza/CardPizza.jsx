import React from "react";

import "./CardPizza.css";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card shadow-sm h-100">
        {/* Imagen */}
        <img
          src={img}
          alt={`Pizza ${name}`}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Cuerpo de la tarjeta */}
        <div className="card-body text-center p-3 d-flex flex-column justify-content-between">
          {/* Título */}
          <div className="border-bottom pb-2 mb-3">
            <h5 className="card-title text-start fw-semibold text-dark mb-0">
              Pizza {name}
            </h5>
          </div>

          {/* Ingredientes */}
          <div className="border-bottom pb-2 mb-3">
            <h6 className="fw-light mb-1 text-secondary">Ingredientes:</h6>
            <p className="small text-muted mb-0">🍕 {ingredients.join(", ")}</p>
          </div>

          {/* Precio */}
          <p className="fw-bold fs-5 text-dark mb-3">
            Precio: ${price.toLocaleString("es-CL")}
          </p>

          {/* Botones */}
          <div className="d-flex justify-content-evenly">
            <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
            <button className="btn btn-dark btn-sm">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}
