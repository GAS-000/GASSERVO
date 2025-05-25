import React from "react";
import ColorWheel from "react-color-wheel-picker";
import { useColor } from "../contexts/ColorContext";

const ColorPicker = () => {
  const { backgroundColor, setBackgroundColor } = useColor();

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        height: "40px", // Adjust this value to match your header height
      }}
    >
      <ColorWheel
        color={backgroundColor}
        onChange={handleColorChange}
        size={40} // Adjust this size to fit your header
        styles={{
          wheelStyles: {
            boxShadow: "none",
            border: "none",
          },
          pointerStyles: {
            width: "8px",
            height: "8px",
            borderWidth: "2px",
          },
        }}
      />
    </div>
  );
};

export default ColorPicker;
