import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../Header";
import { CartContext } from "../contexts";
import "../styles.css";

export const Route = createRootRoute({
  component: () => {
    // We not destructuring the return value of useState(). cartHook is an array with two elements
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div className="h-screen px-3 overflow-y-scroll hide-scrollbar ">
            <Header />
            <Outlet />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools />
      </>
    );
  },
});
