import React from "react";
import "./JokeBox.css";

const container = {
  display: "flex",
  justifyContent: "center",
  color: "white",
};

const button = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  margin: "1rem",
  width: 100,
};

const emoji = {
  fontSize: "3rem",
};

function Reactions(props) {
  return (
    <div className="reactions-container" style={container}>
      <div
        className="reaction"
        style={button}
        onClick={() => props.addLoveCount()}
      >
        <span role="img" aria-label="rofl" style={emoji}>
          🤣
        </span>
        {props.loveCount}
      </div>

      <div
        className="reaction"
        style={button}
        onClick={() => props.addHuhCount()}
      >
        <span role="img" aria-label="thinking" style={emoji}>
          👍
        </span>
        {props.huhCount}
      </div>

      <div
        className="reaction"
        style={button}
        onClick={() => props.addSpareCount()}
      >
        <span role="img" aria-label="eye-roll" style={emoji}>
          ❤️
        </span>
        {props.spareCount}
      </div>
    </div>
  );
}

export default Reactions;
