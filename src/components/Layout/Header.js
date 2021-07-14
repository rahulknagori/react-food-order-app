import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>Order Food</h2>
        <HeaderCartButton onClick={props.onClick} />
      </div>
      <div className={classes.headerImg}>
        <img src={mealsImage} className={classes.img} alt="header-text"></img>
      </div>
    </Fragment>
  );
};

export default Header;
