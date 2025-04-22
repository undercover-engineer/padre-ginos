import { createContext } from "react";

/**
 * Context is app-level state and this state exists for the entire app
 * Because we are dealing with multiple contexts coming from one file it is actually important to use named exports
 * We pass the return type of hook being used cart, which is array of cart items and the setCart function
 * This is necessary for TypeScript to understand the type of the context otherwise createContext() would suffice
 */
export const CartContext = createContext([[], function () {}]);
