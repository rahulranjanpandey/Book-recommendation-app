import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Book Recommendations</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const booksCategory = ["Business", "Self-help", "Fiction", "UPSC Books"];

const booksList = {
  Business: {
    Books: ["BlitzScaling", "How to Win Friends and Influence People"],
    Authors: ["Chris Yeh and Reid Hoffman", "Dale Carnegie"]
  }
};
