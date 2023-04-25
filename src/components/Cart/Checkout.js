import React, { useRef, useState } from "react";
import "./Checkout.css";

const Checkout = (props) => {
  const [checkFormValid, setCheckFormValid] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim().length === 0;
  const isFiveChar = (value) => value.trim().length === 5;
  const checkoutSubmitHandler = (event) => {
    event.preventDefault();
    const nameValue = nameInputRef.current.value;
    const streetValue = streetInputRef.current.value;
    const postalValue = postalInputRef.current.value;
    const cityValue = cityInputRef.current.value;
    const isNameValid = !isEmpty(nameValue);
    const isStreetValid = !isEmpty(streetValue);
    const isCityValid = !isEmpty(cityValue);
    const isPostalValid = isFiveChar(postalValue);

    setCheckFormValid({
      name: isNameValid,
      street: isStreetValid,
      city: isCityValid,
      postal: isPostalValid,
    });

    const formValid =
      isNameValid && isStreetValid && isCityValid && isPostalValid;

    if (!formValid) {
      return;
    }

    props.onSave({
      name: nameValue,
      street: streetValue,
      city: cityValue,
      postal: postalValue,
    });
  };

  const nameInputClasses = `control ${!checkFormValid.name ? "invalid" : ""}`;
  const cityInputClasses = `control ${!checkFormValid.city ? "invalid" : ""}`;
  const streetInputClasses = `control ${
    !checkFormValid.street ? "invalid" : ""
  }`;
  const postalInputClasses = `control ${
    !checkFormValid.postal ? "invalid" : ""
  }`;

  return (
    <form onSubmit={checkoutSubmitHandler} className="form checkout">
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!checkFormValid.name && <p>Please input correct name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />

        {!checkFormValid.street && <p>Please input correct Street</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalInputRef} />

        {!checkFormValid.postal && <p>Please input correct Postal Address</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />

        {!checkFormValid.city && <p>Please input correct city</p>}
      </div>
      <div className="actions-checkout">
        <button type="button" className="" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
