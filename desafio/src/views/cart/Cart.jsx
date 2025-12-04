import React from "react";
import { useState } from "react";

import "./Cart.css";
import { useCart } from "../../context/cart/CartProvider";
import { useUser } from "../../context/user/UserProvider";

const ItemCart = ({ id, name, price, count, img, updateCount }) => {

  return (
    <li className="d-flex align-items-center justify-content-left py-2 gap-2">
      <img
        src={img}
        alt={`Pizza ${name}`}
        className="rounded"
        style={{ height: "40px", width: "50px", objectFit: "cover" }}
      />
      <div
        className="d-flex align-items-center justify-content-left bg-light text-start"
        style={{ width: "20%" }}
      >
        <p className="mb-0 fw-semibold">{name}</p>
      </div>
      <div
        className="d-flex align-items-center justify-content-center bg-light"
        style={{ width: "10%" }}
      >
        <p className="mb-0 fw-semibold">${price.toLocaleString("es-CL")}</p>
      </div>
      <div className="d-flex align-items-center justify-content-left gap-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => updateCount(id, -1)}
        >
          −
        </button>
        <p className="mb-0 fw-semibold">{count}</p>
        <button
          className="btn btn-outline-primary"
          onClick={() => updateCount(id, +1)}
        >
          +
        </button>
      </div>
    </li>
  );
};

const Cart = () => {
  const { getTotal } = useCart();
  const { updateCount } = useCart();
  const { cart } = useCart();
  const { token } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="d-flex flex-column align-items-left justify-content-left bg-light text-start py-5 px-5"
      style={{ minHeight: "80vh" }}
    >
      <h3>Detalles del Pedido:</h3>

      <form
        className="d-flex flex-column align-items-left justify-content-left py-3"
        onSubmit={handleSubmit}
      >
        {cart.length === 0 ? (
          <p className="text-left text-muted">Tu carrito está vacío 🍕</p>
        ) : (
          <ul className="list-unstyled">
            {cart.map((item) => (
              <ItemCart
                key={item.pizza.id}
                id={item.pizza.id}
                name={item.pizza.name}
                price={item.pizza.price}
                count={item.count}
                img={item.pizza.img}
                updateCount={updateCount}
              />
            ))}
          </ul>
        )}

        <div className="py-3">
          <h2>Total: ${getTotal().toLocaleString("es-CL")}</h2>
        </div>
        <div>
          <button type="submit" className={`btn ${token ? "btn-primary" : "btn-secondary"}`}  disabled={!token}>
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cart;
