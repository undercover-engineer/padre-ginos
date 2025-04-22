export default function PizzaHero() {
  return (
    <div className="flex items-center w-ful">
      <img
        src="/src/assets/images/veggie.svg"
        alt="Veggie Pizza"
        className="w-24 h-24 object-contain"
      />
      <img
        src="src/assets/images/supreme.svg"
        alt="Supreme Pizza"
        className="w-28 h-28 object-contain"
      />
      <img
        src="src/assets/images/pepperoni.svg"
        alt="Pepperoni Pizza"
        className="w-40 h-40 object-contain"
      />
      <img
        src="src/assets/images/meat-lovers.svg"
        alt="Meat Lovers Pizza"
        className="hidden md:block object-contain"
      />
      <img
        src="/src/assets/images/supreme.svg"
        alt="Supreme Pizza Large"
        className="hidden lg:block object-contain"
      />
    </div>
  );
}
