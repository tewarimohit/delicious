import React from "react";
import "./HeaderCartIconButton.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartIconButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Items in cart</span>
      <span className="badge">2</span>
    </button>
  );
};

export default HeaderCartIconButton;
