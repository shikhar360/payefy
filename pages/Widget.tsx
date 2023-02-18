import React, { useState } from 'react'

export default function Widget() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleNumber1Change = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNumber2(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Do something with the input values
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
      <div className="mb-4">
        <label htmlFor="number1" className="block text-gray-700 font-bold mb-2">
          Number 1
        </label>
        <input
          type="number"
          id="number1"
          name="number1"
          value={number1}
          onChange={handleNumber1Change}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter a number"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number2" className="block text-gray-700 font-bold mb-2">
          Number 2
        </label>
        <input
          type="number"
          id="number2"
          name="number2"
          value={number2}
          onChange={handleNumber2Change}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter another number"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}
