import React from "react";

import { pizzas } from "../../data/pizzas";

import Header from "../header/Header";
import CardPizza from "../cardpizza/CardPizza";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container_cards">
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
    </>
  );
};

export default Home;
