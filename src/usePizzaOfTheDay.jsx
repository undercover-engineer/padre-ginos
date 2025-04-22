import { useState, useEffect, useDebugValue } from "react";

/*
We can either use the .js or .jsx extension for the custom hook
A custom hook is just a function that calls other hooks
*/

export function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");

  useEffect(() => {
    const fetchPizzaOfTheDay = async () => {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    };

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
}
