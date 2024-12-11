import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    //To prevent the form from refreshing the page
    event.preventDefault();
    //create a new thought
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    // don’t want to add empty thoughts to our app
    if (text.length > 0) {
      // Pass it to addThought()
      props.addThought(thought);
      //Clear the input’s text after adding a new thought
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
