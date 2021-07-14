import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modelOverlay}>
      <div className={classes.modelOvelayChild}>{props.children}</div>;
    </div>
  );
};

let portalDiv = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDiv
      )}
    </React.Fragment>
  );
};

export default Modal;
