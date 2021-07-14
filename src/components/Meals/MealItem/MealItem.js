import { useContext } from "react";
import MealForm from "./MealForm";
import Context from "../../Store/Context";

const MealItem = (props) => {
  const ctx = useContext(Context);
  const onAddToCart = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return <MealForm onAddToCart={onAddToCart}></MealForm>;
};

export default MealItem;
