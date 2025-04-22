import { priceConverter } from "./useCurrency";

// The cart prop is array of pizza objects
export default function Cart({ cart, checkout }) {
  // Tracks the total for items in the cart
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    console.log(current);
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between">
          <p className="type"> {item.pizza.name} </p>
          <p className="size"> {item.size} </p>
          <p className="price"> {item.price} </p>
        </div>
      ))}
      <p className="mb-4 mt-2 font-bold text-lg">
        Total: {priceConverter(total)}
      </p>
      <button
        onClick={checkout}
        className="bg-primary text-white active:bg-[#ffdfdf] active:text-[#4b0404] rounded-xl py-2 px-4 w-28"
      >
        {" "}
        Order{" "}
      </button>
    </div>
  );
}
