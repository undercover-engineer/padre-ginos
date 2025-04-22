// import { Component } from "react";
// import { Link } from "@tanstack/react-router";

// class ErrorBoundary extends Component {
//   state = { hasError: false };
//   /**
//    * static methods allows us access it without having to create an instance of the class
//    *  Example: ErrorBoundary.getDerivedStateFromError
//    */
//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }
//   componentDidCatch(error, info) {
//     console.error("ErrorBoundary caught some error", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="error-boundary">
//           <h2>Uh oh!</h2>
//           <p>
//             There was an error with this listing. <Link to="/">Click here</Link>{" "}
//             to back to the home page.
//           </p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
