import React from "react";
import { Link } from "react-router-dom";
import { useColor } from "../contexts/ColorContext";
import "../styles/contactus.css";

function ContactUs() {
  const { backgroundColor } = useColor();

  return (
    <div className="contactus-container" style={{ backgroundColor }}>
      <div className="contactus">
        <header className="contactus-header">
          <nav>
            <Link to="/">HM</Link> /<Link to="/goodartshop">SHP</Link> /
            <Link to="/goodarttube">PRTFL</Link> /
            <Link to="/goodartwiki">PRJCT</Link> /<Link to="/gaschat">FRM</Link>
          </nav>
        </header>
        <div className="emoji-container">
          <a
            href="/components/ContactCard/GoodArtSucksContactCard.vcf"
            download="GoodArtSucksContactCard.vcf"
            className="emoji-link"
          >
            <span role="img" aria-label="Card Index">
              &#x1F4C7;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
