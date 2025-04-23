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
        <div className="my-6">
          <h3 className="font-batang text-5xl mb-px md:font-bold">
            {pizzaOfTheDay.name}
          </h3>
          <p className="font-jost text-base w-10/12 md:text-lg mt-3">
            {pizzaOfTheDay.description}
            <span className="block xl:w-3/4">
              Pizza is an Italian food that was created in Italy The Naples
              area. It is made with different toopings.
            </span>
          </p>
        </div>
        <div className="flex items-center justify-start lg:gap-18 gap-5 md:gap-14">
          <img
            className="w-24  h-24 md:w-28 md:h-28 lg:w-48 lg:h-48 xl:w-36 xl:h-36 2xl:w-52 2xl:h-52 rounded-full object-cover"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />
          <img
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-48 xl:h-48 2xl:w-64 2xl:h-64 rounded-full object-cover"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />

          <img
            className="w-16 h-16 rounded-full object-cover md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36"
            src={pizzaOfTheDay.image}
            alt={pizzaOfTheDay.name}
          />
        </div>
        <div className="bg-primary w-10 h-2 md:w-20 mt-10 md:mt-10 md:mb-20 rounded-lg mb-10 ml-3"></div>
        <Link
          to="/order"
          className="border-2 border-primary px-4 py-1 rounded-lg text-[#4b0404] text-center w-32 h-10 font-semibold font-jomolhari mb-20"
        >
          Order
        </Link>
        <div
          className="bg-primary w-[900px] h-[900px] 2xl:w-[1100px] 2xl:h-[1100px] fixed hidden xl:block"
          style={{
            right: "0",
            bottom: "0",
            transform: "translate(50%, 50%)",
            borderRadius: "50%", // Makes it a circle
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Clips it to a half circle
          }}
        ></div>
        <img
          src="/src/assets/images/supreme.svg"
          alt="Supreme Pizza Large"
          className="absolute top-80 right-40 hidden xl:block object-contain w-[400px] h-[400px] 2xl:right-32 2xl:top-64 2xl:w-[600px] 2xl:h-[600px]"
        />
      </div>
    </div>
  );
}
