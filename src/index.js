import React from "react";
import ReactDom from "react-dom";

//importing CSS
import "./index.css";

//setup variables
const firstBook = {
  img: "https://m.media-amazon.com/images/I/515lG1Sx8IL._AC_UY218_.jpg",
  title: "Things Fall Apart",
  author: "Alexander Msumba",
}

const secondBook = {
  img: "https://m.media-amazon.com/images/I/61Ovdpf-sfL._AC_UY218_.jpg",
  title: "Going to School",
  author: "Irene Alexander",
}

// Nested Components, React Tools
function BooList() {
  return (
    <div>
      <div>
        <h1 className="bookHeading">AJ BOOK RECOMMENDATION SITE</h1>
        <p className="reading">Knowledge Is Power</p>
        </div>

      <section className="booklist">
        <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
         <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
      </section>
    </div>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img
     src={props.img} alt="logo"/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
     
    </article>
  );
};

// const Image = () => {
//   return (
    
//   );
// };

// const Title = () => {
//   return (
//     <div>
     
//     </div>
//   );
// };

// const Author = () => {
//   return (
//     <div>
     
//     </div>
//   );
// };

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

ReactDom.render(<BooList />, document.getElementById("root"));
