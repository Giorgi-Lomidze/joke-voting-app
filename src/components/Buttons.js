import React from "react";
import "./JokeBox.css";

const Buttons = ({ revealPunchline, getNewJoke }) => {
  return (
    <div className="button-container">
      <button onClick={revealPunchline}>Show Punchline</button>
      <button onClick={getNewJoke} style={{ marginLeft: "1rem" }}>
        Get New Joke
      </button>
    </div>
  );
};
export default Buttons;
