import React from "react";
import ReactDom from "react-dom";


// Nested Components, React Tools
function BooList() {
  return (
    <section>
    <Book />
  </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
    </article>
  );
}

const Image = () => {
  return (<img
    src="https://images-na.ssl-images-amazon.com/images/I/61yM-irmXoS._AC_UL200_SR200,200_.jpg" alt="logo"
  />
  );
}

// const Person = () => {
//   return <h2>This is Alex, I am leaning react.js</h2>;
// }

// const Message = () => {
//   return <p>This is a book list app</p>;
// }

//BOTH CODES DOES SAME THING

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// }

ReactDom.render(<BooList />, document.getElementById('root'));