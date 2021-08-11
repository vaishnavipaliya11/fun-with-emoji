import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "❤️": "love",
  "✨": "Sparkles",
  "🔥": "Fire",
  "🥰": "Smiling Face with Hearts",
  "😂": "face with tears of joy"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  if (meaning === "undefined") {
    meaning = "we dont have in our database";
  }

  function userInputHandler() {
    var userEmoji = event.target.value;

    var meaning = emojiDictionary[userEmoji];

    setMeaning(meaning);
  }

  function userEmojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Detector</h1>
      <input
        onChange={userInputHandler}
        placeholder="enter
      the emojii here!!"
      ></input>
      <div>
        <h2>{meaning} </h2>
      </div>

      <div>
        <h3> emoji we know </h3>
      </div>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => userEmojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
