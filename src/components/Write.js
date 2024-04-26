import React, { useState } from "react";
import axios from "axios";
const Write = () => {
  const [inputValue, setInputValue] = useState("");
  const saveData = async () => {
    try {
      await axios.post("http://localhost:5000/writetodatabase", {
        content: inputValue,
      });
      console.log("Data saved:", inputValue);
    } catch (error) {
      console.error("Error while saving data:", error.message);
    }
  };
  return (
    <div>
      <input
        type="string"
        placeholder="enter somethng"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={saveData}>SAVE</button>
    </div>
  );
};

export default Write;
