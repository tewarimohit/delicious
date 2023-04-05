import React, { useRef, useState } from "react";
import "./MealItemForm.css";
import MealInputForm from "../UI/MealInputForm";

const MealItemForm = (props) => {
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const inputAmount = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmount.current.value;

    if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 10) {
      setIsFormInvalid(true);
      return;
    }

    props.addEnteredAmount(enteredAmount);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <MealInputForm
        label="Amount :"
        ref={inputAmount}
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
      {isFormInvalid && <p>Please enter Valid number between 1-10</p>}
    </form>
  );
};

export default MealItemForm;
