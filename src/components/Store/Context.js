import React from "react";

const Context = React.createContext({
  items: [
    {
      name: "blank",
      price: 0,
    },
  ],
  totalAmount: 0,
});

export default Context;
