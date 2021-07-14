import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import ContextProvider from "./components/Store/ContextProvider";

function App() {
  const [onClicked, setClicked] = useState(false);

  const clickHandler = (value) => {
    setClicked(value);
  };

  return (
    <div>
      <ContextProvider>
        <Header onClick={clickHandler} />
        <Cart onClickState={onClicked} onCloseBtnHandler={clickHandler} />
        <Meals />
      </ContextProvider>
    </div>
  );
}

export default App;
