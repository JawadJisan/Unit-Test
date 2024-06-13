// FormComponent.tsx
import React, { useState } from "react";

const FormComponent = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div>
      <h2>{inputValue}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
