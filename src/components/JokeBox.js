"use client";

import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import Buttons from "./Buttons";
import Reactions from "./Reactions";
import "./JokeBox.css";

const JokeBox = () => {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [showPunchline, setShowPunchline] = useState(false);
  const [loveCount, setLoveCount] = useState(0);
  const [huhCount, setHuhCount] = useState(0);
  const [spareCount, setSpareCount] = useState(0);

  useEffect(() => {
    const getNewJoke = async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/jokes/programming/random"
        );
        const data = await response.json();
        setSetup(data[0].setup);
        setPunchline(data[0].punchline);
        setShowPunchline(false);
      } catch (error) {
        console.log("Error fetching joke:", error);
      }
    };

    getNewJoke();
  }, []);

  const revealPunchline = () => {
    setShowPunchline(true);
  };

  const fetchNewJoke = async () => {
    try {
      const response = await fetch("https://teehee.dev/api/joke");
      const data = await response.json();

      console.log(data);

      setSetup(data.question || "No joke available");
      setPunchline(data.answer || "No punchline available");
      setShowPunchline(false);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  const addLoveCount = () => {
    setLoveCount((prevCount) => prevCount + 1);
  };

  const addHuhCount = () => {
    setHuhCount((prevCount) => prevCount + 1);
  };

  const addSpareCount = () => {
    setSpareCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="joke-container">
      <Joke setup={setup} punchline={punchline} showPunchline={showPunchline} />
      <Buttons revealPunchline={revealPunchline} getNewJoke={fetchNewJoke} />
      <Reactions
        loveCount={loveCount}
        huhCount={huhCount}
        spareCount={spareCount}
        addLoveCount={addLoveCount}
        addHuhCount={addHuhCount}
        addSpareCount={addSpareCount}
      />
    </div>
  );
};

export default JokeBox;
