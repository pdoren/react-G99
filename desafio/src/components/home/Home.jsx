import React from "react";

import { pizzas } from "../../data/pizzas";

import Header from "../header/Header";
import CardPizza from "../cardpizza/CardPizza";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-evenly">
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
