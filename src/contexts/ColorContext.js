// src/contexts/ColorContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <ColorContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </ColorContext.Provider>
  );
};