export default function PizzaHero() {
  return (
    <div className="flex items-center w-full justify-start 2xl: ">
      <img
        src="src/assets/images/pepperoni.svg"
        alt="Pepperoni Pizza"
        className="w-40 h-40 2xl:w-64 2xl:h-64 object-contain"
      />
      <img
        src="src/assets/images/meat-lovers.svg"
        alt="Meat Lovers Pizza"
        className="w-32 h-32 2xl:w-52 2xl:h-52 hidden md:block object-contain"
      />
      <img
        src="src/assets/images/supreme.svg"
        alt="Supreme Pizza"
        className="w-28 h-28 2xl:w-44 2xl:h-44 object-contain"
      />
      <img
        src="/src/assets/images/veggie.svg"
        alt="Veggie Pizza"
        className="w-24 h-24 2xl:w-36 2xl:h-36 object-contain"
      />
    </div>
  );
}
