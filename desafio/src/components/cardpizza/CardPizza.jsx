import React from "react";

import { Link } from "react-router-dom";

import "./CardPizza.css";

import { useCart } from "../../context/cart/CartProvider";

export default function CardPizza({ pizza }) {

  const { addToCart } = useCart();

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card shadow-sm h-100">
        {/* Imagen */}
        <img
          src={pizza.img}
          alt={`Pizza ${pizza.name}`}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Cuerpo de la tarjeta */}
        <div className="card-body text-center p-3 d-flex flex-column justify-content-between">
          {/* Título */}
          <div className="border-bottom pb-2 mb-3">
            <h5 className="card-title text-start fw-semibold text-dark mb-0">
              Pizza {pizza.name}
            </h5>
          </div>

          {/* Ingredientes */}
          <div className="border-bottom pb-2 mb-3">
            <h6 className="fw-light mb-1 text-secondary">Ingredientes:</h6>
            <div className="small text-muted mb-0">
              <ul className="list-inline mb-3">
                <li key="0" className="list-inline-item">
                  🍕{" "}
                </li>
                {pizza.ingredients.map((ingrediente, index) => (
                  <li key={index} className="list-inline-item">
                    {ingrediente}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Precio */}
          <p className="fw-bold fs-5 text-dark mb-3">
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </p>

          {/* Botones */}
          <div className="d-flex justify-content-evenly">
            <Link to={`/pizza/${pizza.id}`} className="btn btn-outline-dark btn-sm">Ver Más 👀</Link>
            <button className="btn btn-dark btn-sm" onClick={() => addToCart(pizza, 1)}>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}
