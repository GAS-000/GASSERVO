import React from "react";
import { Link } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";
import "../styles/goodartshop.css";

function GoodArtShop() {
  const { backgroundColor } = useColor();

  return (
    <div className="goodartshop-container" style={{ backgroundColor }}>
      <div className="landing-page" style={{ backgroundColor }}>
        <header className="landing-header">
          <h1>GOODART.SHOP</h1>
        </header>
        <div className="emoji-container">
          <Link to="/" className="emoji-link">
            <span role="img" aria-label="Trolleybus">
              &#x1F69C;
            </span>
          </Link>
          <Link to="/" className="emoji-link">
            <span role="img" aria-label="Construction Sign">
              &#x1F6A7;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GoodArtShop;
