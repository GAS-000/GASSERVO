import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";
import "../styles/landingpage.css";

export default function LandingPage() {
  const { backgroundColor } = useColor();
  const [randomEmoji1, setRandomEmoji1] = useState("");
  const [randomEmoji2, setRandomEmoji2] = useState("");
  const [randomEmoji3, setRandomEmoji3] = useState("");
  const [randomEmoji4, setRandomEmoji4] = useState("");

  useEffect(() => {
    const emojis1 = [
      "&#x1F6CD;",
      "&#x1F6D2;",
      "&#x1F45B;",
      "&#x1F4B3;",
      "&#x1F9FE;",
      "&#x1F48E;",
      "&#x1F457;",
      "&#x1F455;",
      "&#x1F456;",
      "&#x1F45A;",
      "&#x1F381;",
      "&#x1F4E6;",
      "&#x1F4B0;",
      "&#x1F4B5;",
      "&#x1F4B6;",
      "&#x1F4B7;",
      "&#x1F4B4;",
      "&#x1FA99;",
    ];
    const emojis2 = [
      "&#x1F4F7;",
      "&#x1F5BC;",
      "&#x1F4F9;",
      "&#x1F3A5;",
      "&#x1F4FA;",
      "&#x1F39E;",
      "&#x1F4F8;",
      "&#x1F4FC;",
      "&#x1F3AC;",
      "&#x1F3AC;",
      "&#x1F3A8;",
      "&#x1F58D;",
      "&#x1F525;",
      "&#x1F440;",
      "&#x1F4FD;",
      "&#x1F37F;",
      "&#x1F58C;",
    ];
    const emojis3 = [
      "&#x1F4F0;",
      "&#x1F9E0;",
      "&#x1F4CC;",
      "&#x1F4A1;",
      "&#x1F5C4;",
      "&#x1F5C2;",
      "&#x1F4BB;",
      "&#x1F4BE;",
      "&#x1F4CE;",
      "&#x1F4CB;",
      "&#x1F47D;",
      "&#x1F30E;",
      "&#x1F30F;",
      "&#x1F30D;",
      "&#x1F310;",
      "&#x1F9EA;",
      "&#x1F52C;",
      "&#x1F5A5;",
      "&#x1F9EC;",
    ];
    const emojis4 = [
      "&#x1F4AC;",
      "&#x1F4D3;",
      "&#x1F4EC;",
      "&#x1F399;",
      "&#x1F4DD;",
      "&#x1F5E3;",
      "&#x1F58A;",
      "&#x1F4DA;",
      "&#x1F4D8;",
      "&#x1F4D5;",
      "&#x1F4D7;",
      "&#x1F4D9;",
      "&#x1F4D4;",
      "&#x1F4D6;",
      "&#x1F4EA;",
      "&#x1F4EB;",
      "&#x1F4AD;",
    ];

    setRandomEmoji1(emojis1[Math.floor(Math.random() * emojis1.length)]);
    setRandomEmoji2(emojis2[Math.floor(Math.random() * emojis2.length)]);
    setRandomEmoji3(emojis3[Math.floor(Math.random() * emojis3.length)]);
    setRandomEmoji4(emojis4[Math.floor(Math.random() * emojis4.length)]);
  }, []);

  return (
    <div className="landing-page" style={{ backgroundColor }}>
      <header className="landing-header">
        <h1>GOODARTSUCKS CLUB</h1>
      </header>
      <div className="emoji-container">
        <Link to="/GoodArtShop" className="emoji-link">
          <span
            role="img"
            aria-label="shopping"
            dangerouslySetInnerHTML={{ __html: randomEmoji1 }}
          ></span>
        </Link>
        <Link to="/goodarttube" className="emoji-link">
          <span
            role="img"
            aria-label="portfolio"
            dangerouslySetInnerHTML={{ __html: randomEmoji2 }}
          ></span>
        </Link>
        <Link to="/GoodArtWiki" className="emoji-link">
          <span
            role="img"
            aria-label="wiki"
            dangerouslySetInnerHTML={{ __html: randomEmoji3 }}
          ></span>
        </Link>
        <Link to="/GasChat" className="emoji-link">
          <span
            role="img"
            aria-label="forum"
            dangerouslySetInnerHTML={{ __html: randomEmoji4 }}
          ></span>
        </Link>
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
