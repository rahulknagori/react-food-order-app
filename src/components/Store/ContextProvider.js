import { useReducer } from "react";
import Context from "./Context";

let initialValue = {
  items: [
    {
      name: [],
    },
  ],
  totalAmount: 0,
  price: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.items, action.item];
    let upDatedAmount = state.totalAmount + action.item.amount;
    let price = state.price + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let existingCartItem = [];
    if (existingCartItemIndex >= 1) {
      existingCartItem = updatedItems.splice(existingCartItemIndex, 1);
      price =
        state.price +
        action.item.price * (action.item.amount - existingCartItem[0].amount);
      upDatedAmount =
        state.totalAmount + action.item.amount - existingCartItem[0].amount;
    }

    return {
      totalAmount: upDatedAmount,
      items: updatedItems,
      price: price,
    };
  }
};

const ContextProvider = (props) => {
  const [currentValue, dispatcher] = useReducer(reducer, initialValue);

  const addItemsToCart = (item) => {
    dispatcher({ type: "ADD", item: item });
  };

  const values = {
    totalAmount: currentValue.totalAmount,
    addItem: addItemsToCart,
    items: currentValue.items,
    price: currentValue.price,
    noOfSimilarProducts: currentValue.noOfSimilarProducts,
  };

  return <Context.Provider value={values}>{props.children}</Context.Provider>;
};

export default ContextProvider;
