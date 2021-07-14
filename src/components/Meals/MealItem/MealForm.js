import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const refValue = useRef(null);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const value = refValue.current.value;
    props.onAddToCart(+value);
  };

  return (
    <form onSubmit={onFormSubmitHandler} className={classes.form}>
      <div className={classes.labelInput}>
        <label htmlFor="amount">Amount</label>
        <Input ref={refValue} type="number" id="amount" />
      </div>
      <button type="submit" className={classes.formBtn}>
        +Add
      </button>
    </form>
  );
};

export default MealForm;
