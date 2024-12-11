import React from "react";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <form className="AddThoughtForm">
          <input
            type="text"
            aria-label="What's on your mind?"
            placeholder="What's on your mind?"
          />
          <input type="submit" value="Add" />
        </form>
        <ul className="thoughts">
          <li className="thought">
            <button aria-label="Remove thought" className="remove-button">
              x
            </button>
            <div className="text">Thought example</div>
          </li>
          <li className="thought">
            <button aria-label="Remove thought" className="remove-button">
              x
            </button>
            <div className="text">Thought example</div>
          </li>
        </ul>
      </main>
    </div>
  );
};