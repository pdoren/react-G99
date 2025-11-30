import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useCart } from "../../context/cart/CartProvider";

function Pizza() {

  const { id } = useParams();

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener la pizza");
        return res.json();
      })
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-4">Cargando...</div>;
  if (error) return <div className="alert alert-danger mt-4">{error}</div>;

  return (
    <div className="container my-4">
      <div
        className="card shadow"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <img
          src={pizza.img}
          className="card-img-top"
          alt={pizza.name}
          style={{ height: "300px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h3 className="card-title text-capitalize border-bottom pb-3">
            {pizza.name}
          </h3>
          <p className="card-text border-bottom pb-3">{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul className="list-unstyled border-bottom pb-3">
            {pizza.ingredients.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>

          <div className="justify-content-between align-items-center">
            <h4 className="text-dark fw-bold">
              Precio: ${pizza.price.toLocaleString("es-CL")}
            </h4>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button className="btn btn-dark" onClick={() => addToCart(pizza, 1)}>Agregar al carrito 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
