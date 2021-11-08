import React from "react";
import "./styles.css";
import { useState } from "react";

const books = {
  Business: [
    {
      name: "Blitzscaling",
      author: "by Chris Yeh and Reid Hoffman",
      rating: "rating: 9/10"
    },
    {
      name: "Rework",
      author: "by Jason Fried, David Heinemeier Hansson ",
      rating: "rating: 10/10"
    }
  ],
  Fiction: [
    {
      name: "Five Point Someone",
      author: "by Chetan Bhagat",
      rating: "rating: 9/10"
    },
    {
      name: "Two States",
      author: "by Chetan Bhagat",
      rating: "rating: 9/10"
    }
  ],
  UPSC: [
    {
      name: "Indian Polity",
      author: "by M. Laxmikant",
      rating: "rating: 10/10"
    },
    {
      name: "A brief history of Modern India",
      author: "by Rajiv Ahir",
      rating: "rating: 9/10"
    }
  ]
};
export default function App() {
  const [genre, setGenre] = useState("Business");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Books Recommendation App</h1>
      <div>
        {Object.keys(books).map((genre) => (
          <button className="btn" onClick={() => clickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {books[genre].map((books) => (
            <li key={books} className="section">
              {" "}
              <div className="name">{books.name}</div>
              <div className="author">{books.author}</div>
              <div className="rating">{books.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
