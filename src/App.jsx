import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import "./styles.css";

/*
 * Create component App
 * React is about making components and then taking those components and composing them together to make a bigger component
 * There two types of components: functional components and class components
 * A function component must return markup, which is what React.createElement generates
 * React.createElement takes three arguments: the type of element, the properties, and the children
 * React.createElement('h2', { id: 'food title' }, 'Pizza')
 * React.createElement creates one instance of some component. If you pass a string it will create a DOM tag from the string
 */

const router = createRouter({ routeTree });
const queryClient = new QueryClient();
const App = () => {
  // StrictMode will give you additional warnings about things you should not be doing
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

// Grab existing element with id='root' from index.html. It is where our React app will be rendered
const container = document.getElementById("root");
// This prepares React to manage updates and rendering inside "root"
const root = createRoot(container);
// React.createElement(App) creates an App component. root.render renders the App component inside the container
root.render(<App />);
