import React from "react";
import "./MealInputForm.css";

const MealInputForm = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default MealInputForm;
