import React from "react";
import ReactDom from "react-dom";

//importing CSS
import "./index.css";

// Nested Components, React Tools
function BooList() {
  return (
    <div>
    
      <h1 className="bookHeading">BOOK RECOMMENDATION SITE</h1>
      
    
    <section className="booklist">
      
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      </section>
      </div>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return (
    <img
    src="https://m.media-amazon.com/images/I/51n59fieopL._AC_UY218_.jpg" alt="logo"
  />
  );
}

const Title = () => {
  return (
    <div>
      <h1>Things Fall Apart</h1>
    </div>
  );
}

const Author = () => {
  return (
    <div>
      <h2>Author: Alexander Msumba</h2>
    </div>
  )
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