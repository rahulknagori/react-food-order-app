import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React from "react";

const mealsList = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const mapMeals = mealsList.map((meal) => {
  return (
    <React.Fragment>
      <div key={meal.id} className={classes.availableMealDiv}>
        <li className={classes.list}>
          <h2>{meal.name}</h2>
          <p>{meal.description}</p>
          <p>${meal.price}</p>
        </li>
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          price={meal.price}
        />
      </div>
    </React.Fragment>
  );
});

const AvailableMeals = () => {
  return (
    <Card className={classes.availableMeal}>
      <ul>{mapMeals}</ul>
    </Card>
  );
};

export default AvailableMeals;
