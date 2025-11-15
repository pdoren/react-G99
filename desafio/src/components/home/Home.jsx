import React from "react";
import { useState, useEffect } from "react";

// import { pizzas } from "../../data/pizzas";

import Header from "../header/Header";
import CardPizza from "../cardpizza/CardPizza";

import "./Home.css";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    requestAPIPizzas();
  }, []);

  async function requestAPIPizzas() {
    const url = "http://localhost:5000/api/pizzas";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-evenly row-gap-3">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
