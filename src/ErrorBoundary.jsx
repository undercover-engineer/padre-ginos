import { Component } from "react";
import { Link } from "@tanstack/react-router";

/*
 * We import Component so we can create a class-based React component
 * We import Link from Router to help users navigate back to the Homepage if there is an error
 */
class ErrorBoundary extends Component {
  // We set up state to track whether there's been an error
  state = { hasError: false };
  /**
   * static methods allows us access it without having to create an instance of the class
   *  Example: ErrorBoundary.getDerivedStateFromError
   * The getDerivedStateFromError method is like saying if an error occurs in any of my child components, update my state
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // The method runs when an error is caught and is usually used to log the error (to the console or a monitoring service)
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught some error", error, info);
  }
  // The render method contains what will be displayed to the user
  render() {
    if (this.state.hasError) {
      return (
        <div className="font-inter w-11/12 mt-40 md:mt-60 mx-auto text-center">
          <h2 className="text-2xl font-bold">It's not you, it's us!</h2>
          <p className="font-light">
            There was an error with this page.{" "}
            <Link to="/" className="text-primary">
              Click here
            </Link>{" "}
            to back to the home page.
          </p>
        </div>
      );
    }
    // If there is no error, the normal children are shown. this.props.children refers to any child component inside the component
    return this.props.children;
  }
}

export default ErrorBoundary;
