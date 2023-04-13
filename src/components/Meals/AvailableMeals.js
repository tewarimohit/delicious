import React, { useEffect, useState } from "react";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import Loader from "../UI/Loader";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://custom-hook-a663f-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!!");
        }
        const data = await response.json();
        const loadedData = [];
        for (let key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedData);
      } catch (err) {
        setHasError(err.message);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  const availableMeals = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className="loader">
        <Loader />
      </section>
    );
  }
  if (hasError) {
    return (
      <section className="loader">
        <p className="has-error">{hasError}</p>
      </section>
    );
  }

  return (
    <section className="meals">
      <Card>
        <ul>{availableMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
