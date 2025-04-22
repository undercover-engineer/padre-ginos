import { useContext, useState } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";
import logo from "./assets/images/logo.svg";

export default function Header() {
  const [cart] = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-3 flex justify-between items-center mb-8 relative md:static lg:w-4/5 md:mx-auto">
      <Link to={"/"}>
        <img
          src={logo}
          alt="padre ginos logo"
          className="w-32 h-32 text-primary"
        />
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-700 ml-20 md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Nav links are hidden on mobile unless toggled */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col absolute top-full right-0 -mt-16 w-38 shadow-sm font-jost font-semibold md:flex md:flex-row md:static md:shadow-none md:top-0 md:mt-0 md:gap-6 md:text-xl`}
      >
        <Link
          to={"/"}
          className="px-4 py-2 hover:bg-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to={"/pizzaoftheday"}
          className="px-4 py-2 hover:bg-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Pizza Of The Day
        </Link>
        <Link
          to={"/about"}
          className="px-4 py-2 hover:bg-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to={"/contact"}
          className="px-4 py-2 hover:bg-gray-200"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
      <Link to={"/"} className="nav-cart flex">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </Link>
    </nav>
  );
}
