import { createLazyFileRoute } from "@tanstack/react-router";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
// import { priceConverter } from "../useCurrency";
import { Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pizzaoftheday")({
  component: PizzaOfTheDay,
});

function PizzaOfTheDay() {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:w-4/5 md:mx-auto">
      <h2 className="font-jomolhari text-2xl font-bold md:text-3xl md:font-light">
        Today's special
      </h2>
      <div>
        <div className="my-10 lg:mt-12">
          <h3 className="font-batang text-5xl mb-px md:font-bold">
            {pizzaOfTheDay.name}
          </h3>
          <p className="font-jost text-sm w-10/12 md:text-base md:mt-2">
            {pizzaOfTheDay.description}
          </p>
        </div>
        <div className="flex justify-center items-center md:justify-start lg:gap-20 gap-5 md:gap-14">
          <img
            className="w-16 h-16 rounded-full object-cover md:w-20 md:h-20 lg:w-32 lg:h-32"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />
          <img
            className="w-24  h-24 md:w-28 md:h-28 lg:w-48 lg:h-48 rounded-full object-cover"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />

          <img
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />
        </div>
        <div className="bg-primary w-10 h-2 md:w-20 md:mt-10 md:mb-20 rounded-lg mb-10 ml-3"></div>
        <Link
          to="/order"
          className="border-2 border-primary px-4 py-1 rounded-lg text-[#4b0404] text-center w-32 h-10 font-semibold font-jomolhari mb-20"
        >
          Order
        </Link>
      </div>
    </div>
  );
}
