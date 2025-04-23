import { createLazyFileRoute, Link } from "@tanstack/react-router";
import PizzaHero from "../PizzaHero";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center h-4/5 md:w-4/5 md:mx-auto">
      <h1 className="font-batang font-bold text-3xl lg:w-1/2 md:w-3/4 md:text-5xl 2xl:text-6xl 2xl:mb-10">
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
        className="absolute top-80 right-44 2xl:right-44 2xl:top-96 hidden xl:block object-contain w-[450px] h-[450px] 2xl:w-[600px] 2xl:h-[600px]"
      />
    </div>
  );
}
