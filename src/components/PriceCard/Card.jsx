import React from "react";
import Features from "../Features/Features";
import Dashboard from "../Dashboard/Dashboard";

const Card = ({ price }) => {

  return (
    <div className="bg-red-300 my-5 rounded-md p-5 flex flex-col">
      <h2>
        <span className="text-slate-600  text-5xl font-bold">
          {price.price}
        </span>
        <span className="text-red-600">/month</span>
      </h2>
      <h1 className=" font-bold p-5">{price.name}</h1>
      <p className="text-start">features:</p>
      {price.features.map((feature, index) => (
        <Features feature={feature} key={index} />
      ))}
      <button className=" bg-green-700 w-full rounded-md text-lime-100 p-3 my-5 mt-auto hover:bg-slate-800">
        BUY NOW
      </button>
    </div>
  );
};

export default Card;
