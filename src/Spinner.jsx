import pizza from "./assets/images/meat-lovers.svg";
const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img
        src={pizza}
        alt="Loading..."
        className="w-20 h-20 object-contain animate-spin"
      />
    </div>
  );
};

export default Spinner;
