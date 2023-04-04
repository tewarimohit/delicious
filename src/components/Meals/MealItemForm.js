import React from "react";
import "./MealItemForm.css";
import MealInputForm from "../UI/MealInputForm";

const MealItemForm = (props) => {
  return (
    <form className="form">
      <MealInputForm
        label="Amount :"
        input={{
          id: `amount_${props.mealId}`,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
