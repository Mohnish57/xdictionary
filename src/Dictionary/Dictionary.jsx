import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
  const input = useRef(null);
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = input.current.value;

    const result = data.find(
      (item) => item.word.toLowerCase() === inputValue.toLowerCase()
    );
    if (result) {
      setResult(result.meaning);
    } else {
      setResult("Word not found in the dictionary");
    }
  };

  return (
    <>
      <div style={{ margin: "1rem", textAlign: "left" }}>
        <h1>Dictionary App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input"></label>
          <input name="input" type="text" ref={input} />
          <button type="submit">Search</button>
          <p style={{ fontWeight: "bold" }}>Definition:</p>
        </form>
        <p>{result}</p>
      </div>
    </>
  );
};
export default Dictionary;
