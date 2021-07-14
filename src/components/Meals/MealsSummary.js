import Card from "../UI/Card";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <Card className={classes.meals}>
      <h2>Pick the food you crave the most</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default MealsSummary;
