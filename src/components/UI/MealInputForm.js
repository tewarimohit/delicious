import React from "react";
import "./MealInputForm.css";

const MealInputForm = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default MealInputForm;
