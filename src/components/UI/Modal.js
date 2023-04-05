import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = () => <div className="backdrop" />;

const ModalOverlay = (props) => (
  <div className="modal">
    <div className={`${props.children}`}>{props.children}</div>
  </div>
);

const getElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, getElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        getElement
      )}
    </Fragment>
  );
};

export default Modal;
