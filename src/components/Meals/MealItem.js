import React from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import { useCart } from "../../store/CartProvider";

const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  const cartCtx = useCart();

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        {" "}
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm mealId={props.id} addEnteredAmount={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
