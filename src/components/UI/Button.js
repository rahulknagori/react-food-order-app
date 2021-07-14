import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <React.Fragment>
      <button
        type={props.type}
        onClick={props.onClick}
        className={`${classes.btn} ${props.className}`}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
