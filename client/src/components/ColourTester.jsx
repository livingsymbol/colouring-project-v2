/* eslint-disable react/prop-types */
import { useState } from "react";

const ColorTester = ({ color }) => {
  const [spaces, setSpaces] = useState(["white", "white", "white"]);
  // eslint-disable-next-line no-unused-vars
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSpaceClick = (index) => {
    if (color && color !== "clear") {
      const updatedSpaces = [...spaces];
      updatedSpaces[index] = color;
      setSpaces(updatedSpaces);
      setSelectedIndex(index);
    }
  };

  const handleClear = () => {
    setSpaces(["white", "white", "white"]);
    setSelectedIndex(null);
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-4">
      <div className="text-[#c7b73a] flex justify-center items-center font-semibold bg-white w-full h-10 rounded-md border-2 border-[#c7b73a]">
        Try selected colours below
      </div>
      <div
        className="w-full h-10 cursor-pointer rounded-md transition-colors duration-300 border-2 border-[#c7b73a] ease-in-out"
        style={{ backgroundColor: spaces[0] }}
        onClick={() => handleSpaceClick(0)}
      />
      <div
        className="w-full h-10 cursor-pointer rounded-md transition-colors duration-300 border-2 border-[#c7b73a] ease-in-out"
        style={{ backgroundColor: spaces[1] }}
        onClick={() => handleSpaceClick(1)}
      />
      <div
        className="w-full h-10 cursor-pointer rounded-md transition-colors duration-300 border-2 border-[#c7b73a] ease-in-out"
        style={{ backgroundColor: spaces[2] }}
        onClick={() => handleSpaceClick(2)}
      />
      <button
        onClick={handleClear}
        className="px-4 py-1 md:px-8 md:py-2 text-md md:text-lg font-semibold text-white bg-[#a58c3a]  rounded-lg duration-100 hover:bg-[#c7b73a] hover:text-white shadow-2xl"
      >
        Reset
      </button>
    </div>
  );
};

export default ColorTester;
