import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  // The useEffect runs after the component is mounted
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    // Below is cleanup code that removes the di appended to #modal when the component is removed(unamounted) to avoid memory leaks
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  // Whatever function you return when using the useEffect hook gets run once, when the component is unmounted
  return createPortal(
    <div className="bg-[#ff9c9c] md:w-fit px-10 py-4 rounded-lg font-inter">
      {children}
    </div>,
    elRef.current,
  );
};

export default Modal;
