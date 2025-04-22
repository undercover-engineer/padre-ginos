import { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner";
import { createLazyFileRoute } from "@tanstack/react-router";
import Cart from "../Cart";
import Pizza from "../Pizza";
import { CartContext } from "../contexts";
import priceConverter from "../useCurrency";

/**
 * We are making a new route for the order page.
 * We define what URL it's at, /order and what component it should render when the URL is visited
 */

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

function Order() {
  // The argument given to useState is the default value of the state variable
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni"); //pizzaType is the id of the pizza
  const [pizzaSize, setPizzaSize] = useState("M");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  async function checkout() {
    // This prevents users from adding more cart items while the checkout is in progress
    setLoading(true);

    await fetch("api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    // These only run after the await is done
    setCart([]);
    setLoading(false);
  }

  let price, selectedPizza;

  if (!loading) {
    // The find() method returns the value of the first element that passes a test.
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = priceConverter(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // remove this later, just to show you the loading state
    // The fetch() method is used to make a network request to fetch pizza data from the server
    const pizzasRes = await fetch("/api/pizzas");
    // Converts the response into usable JSON data
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order-page pb-10 md:w-4/5 md:mx-auto md:col">
      <div className="order lg:w-1/2 lg:mx-auto">
        <h2 className="font-jost font-bold text-xl mb-6 md:text-2xl">
          <span className="border-primary border-2 rounded-full px-3">1</span>{" "}
          Create Order
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([
              ...cart,
              { pizza: selectedPizza, size: pizzaSize, price },
            ]);
          }}
        >
          <div className="font-inter space-y-6">
            <div>
              <label htmlFor="pizza-type" className="font-semibold text-lg">
                Pizza Type
              </label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                value={pizzaType}
                className="border-primary border-2 rounded-lg w-[95%] pl-2 py-2 block lg:w-3/4"
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size" className="font-semibold text-lg">
                Pizza Size
              </label>
              <div className="space-x-12 w-[95%]">
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                    onChange={(e) => setPizzaSize(e.target.value)}
                    className="w-4 h-4 mr-1 accent-primary"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                    onChange={() => setPizzaSize("M")}
                    className="w-4 h-4 mr-1 accent-primary"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                    onChange={(e) => setPizzaSize(e.target.value)}
                    className="w-4 h-4 mr-1 accent-primary"
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="order-pizza my-8">
              <h2 className="font-jost font-bold text-xl mb-6 md:text-2xl">
                <span className="border-primary border-2 rounded-full px-3">
                  2
                </span>{" "}
                Verify Order Details
              </h2>
              <div className="relative">
                <Pizza
                  name={selectedPizza.name}
                  description={selectedPizza.description}
                  image={selectedPizza.image}
                />
                <p className="absolute top-0 right-0 font-light text-xl text-[#4b0404] md:font-semibold">
                  {price}
                </p>
              </div>
              <button
                type="submit"
                className="border-primary border-2 active:bg-[#ffdfdf] active:text-[#4b0404] rounded-xl py-2 px-4 mt-6"
              >
                Add to cart
              </button>
            </div>
          )}
        </form>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="lg:mx-auto lg:w-1/2">
          {" "}
          <h2 className="font-jost font-bold text-xl mb-4 md:text-2xl">
            <span className="border-primary border-2 rounded-full px-3">3</span>{" "}
            Cart
          </h2>
          <Cart checkout={checkout} cart={cart} />
        </div>
      )}
    </div>
  );
}
