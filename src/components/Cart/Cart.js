import Modal from "../UI/Modal";
import React, { useContext } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import Button from "../UI/Button";
import Context from "../Store/Context";

const Cart = (props) => {
  const CtxData = useContext(Context);
  const { price, noOfSimilarProducts } = CtxData;

  //when the close button is clicked, it changes the state of the cart visibility to false
  const onClickHandler = () => {
    props.onCloseBtnHandler(false);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      {props.onClickState && (
        <Modal>
          <Card>
            <form onSubmit={formOnSubmitHandler}>
              {CtxData.items.map((item) => {
                return (
                  <p
                    key={item.id}
                    className={
                      item.name.length > 0 ? classes.itemName : undefined
                    }
                  >
                    {item.name} {item.amount ? "x" : undefined} {item.amount}
                  </p>
                );
              })}
              <div className={classes.amount}>
                <h3>Total Amount</h3>
                <p>${price.toFixed(2)}</p>
              </div>
              <div className={classes.modalCartBtn}>
                <Button
                  type="button"
                  onClick={onClickHandler}
                  className={classes.closeBtn}
                >
                  Close
                </Button>
                <Button className={classes.orderBtn}>Order</Button>
              </div>
            </form>
          </Card>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Cart;
