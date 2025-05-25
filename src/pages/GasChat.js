import React from "react";
import { Link } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";
import "../styles/gaschat.css";

function GasChat() {
  const { backgroundColor } = useColor();

  return (
    <div className="gaschat-container" style={{ backgroundColor }}>
      <div className="gaschat">
        <header className="gaschat-header">
          <nav>
            <Link to="/">HM</Link> /<Link to="/goodartshop">SHP</Link> /
            <Link to="/goodarttube">PRTFL</Link> /
            <Link to="/goodartwiki">PRJCT</Link> /<Link to="/gaschat">FRM</Link>
          </nav>
        </header>
        <h1 className="gaschat-title">/frm/ - Rant</h1>
        <div className="gaschat-form">
          <input
            type="text"
            placeholder="Anonymous"
            className="gaschat-input"
          />
          <input type="text" placeholder="Subject" className="gaschat-input" />
          <div className="gaschat-input-group">
            <input
              type="text"
              placeholder="File Name"
              className="gaschat-input"
            />
            <button className="gaschat-button">{"\u{270F}\u{FE0F}"}</button>
          </div>
          <textarea
            placeholder="Enter Text"
            className="gaschat-textarea"
          ></textarea>
          <div className="gaschat-file-input">
            <button className="gaschat-button">{"\u{1F4C2}"}</button>
            <span>no file selected</span>
          </div>
        </div>
      </div>
      <footer className="landing-footer">
        <Link to="/ContactUs" className="emoji-link">
          <span role="img" aria-label="contact">
            &#x1F4F1;
          </span>
        </Link>
      </footer>
    </div>
  );
}

export default GasChat;
