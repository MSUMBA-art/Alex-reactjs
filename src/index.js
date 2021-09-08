import React from "react";
import ReactDom from "react-dom";



function Greeting() {
  return (
    <div>
      <h2>This is Alex, I am leaning react.js</h2>;
    </div>
  );
  
}

//BOTH CODES DOES SAME THING

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// }

ReactDom.render(<Greeting />, document.getElementById('root'));