import React from "react";
import "./JokeBox.css";

const Joke = ({ setup, punchline, showPunchline }) => {
  return (
    <div
      className="joke-setup"
      style={{ textAlign: "center", marginTop: "2rem" }}
    >
      <h2 id="setup">{setup}</h2>
      {showPunchline && (
        <h2 id="punchline" style={{ marginTop: "1rem", fontStyle: "italic" }}>
          {punchline}
        </h2>
      )}
    </div>
  );
};

export default Joke;
