/* 
* JSX translates HTML tags into React.createElement calls
* JSX is a syntax extension for JavaScript that looks similar to HTML
    <h2 id="food">Pizza</h2> => React.createElement("h2", {id:"food"}, "Pizza")
* We don't need to import React from "react", the latest version of JSX handles that for us
* Props are variables that the parent App passes to its children (instances of Pizza)
* P in Pizza is capitalized because it is a React component, if you use lowercase it will be treated as a DOM tag (web component)
*/
const Pizza = (props) => {
  return (
    <div className="pizza">
      <h2 className="font-semibold text-xl w-3/4">{props.name}</h2>
      <p className="text-sm md:text-base">{props.description}</p>
      <img
        src={props.image}
        alt={props.name}
        className="rounded-lg md:mt-4 2xl:w-4/5"
      />
    </div>
  );
};

export default Pizza;
