import React from "react";
import "./Checkout.css";

const Checkout = (props) => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className="form-control">
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <div className="form-control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
