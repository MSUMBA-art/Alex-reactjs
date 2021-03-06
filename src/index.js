import React from "react";
import ReactDom from "react-dom";

//importing CSS
import "./index.css";

//setup variables
const books = [


  {
    img: "https://m.media-amazon.com/images/I/515lG1Sx8IL._AC_UY218_.jpg",
    title: "Things Fall Apart",
    author: "Alexander Msumba",
  },

  {
    img: "https://m.media-amazon.com/images/I/61Ovdpf-sfL._AC_UY218_.jpg",
    title: "Going to School",
    author: "Irene Alexander",
  },
];



// Nested Components, React Tools


function BookList() {
  return (
    <div>
      <section className="booklist"> {books.map((book) => {
        return "hellooo";
     })}</section>
      </div>
  )
}

     
       

const Book = (props) => {
// const Book = ({img, title, author, children}) => {
 const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="logo" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {children} */}
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

ReactDom.render(<BookList />, document.getElementById("root"));
