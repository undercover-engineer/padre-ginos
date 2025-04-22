import { createLazyFileRoute, Link } from "@tanstack/react-router";
import PizzaHero from "../PizzaHero";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center h-4/5 md:w-4/5 md:mx-auto">
      <h1 className="font-batang font-bold text-3xl lg:w-1/2 md:w-3/4 md:text-5xl">
        Freshly Baked. Fully Loaded. Your Slice of Happiness Awaits!
      </h1>
      <PizzaHero />
      <div className="space-x-10 flex font-inter mb-10">
        <Link
          to="/order"
          className="border-2 border-primary px-3 py-1 rounded-lg text-[#4b0404] text-center w-32 h-10 text-lg"
        >
          Order
        </Link>
        <Link
          to="/past"
          className="bg-primary px-3 py-2 rounded-lg text-white text-center w-32 h-10"
        >
          Past Orders
        </Link>
      </div>
    </div>
  );
}
