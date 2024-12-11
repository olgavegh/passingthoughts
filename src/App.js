import React, { useState } from "react";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

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
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
