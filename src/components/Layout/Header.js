import React, { Fragment } from "react";
import "./Header.css";
import MealImage from "../../assets/meals.jpg";
import HeaderCartIconButton from "./HeaderCartIconButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Heading</h1>
        <HeaderCartIconButton />
      </header>
      <div className="main-image">
        <img src={MealImage} alt="Meals"></img>
      </div>
    </Fragment>
  );
};

export default Header;
