import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import Context from "../Store/Context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const ctxData = useContext(Context);
  const onClickHandler = () => {
    props.onClick(true);
  };

  return (
    <div onClick={onClickHandler} className={classes.cartDiv}>
      <div className={classes.cartBtn}>
        <CartIcon className={classes.cartIcon} />
        <span>Your Cart</span>
        <div className={classes.cartCount}>
          <p>{ctxData.totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCartButton;
