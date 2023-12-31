import React, { useState } from "react";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Fuel Your Vibe</h1>
      <h2>Connect To Tribe</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Enter your name..."
        required
      />
      <button>My Coffee Space</button>
    </form>
  );
}
