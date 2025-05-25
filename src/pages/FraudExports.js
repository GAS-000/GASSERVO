import React from "react";
import { Link } from "react-router-dom";
import WikiSidebar from "../components/GoodArtTube/WikiSidebar";
import WikiSearchBar from "../components/GoodArtTube/WikiSearchBar";
import { useColor } from "../contexts/ColorContext";
import "../styles/goodartwiki.css";

function GoodArtWiki() {
  const { backgroundColor } = useColor();

  return (
    <div className="goodartwiki-container" style={{ backgroundColor }}>
      <div className="landing-page" style={{ backgroundColor }}>
        <header className="landing-header">
          <h1>GOODART.WIKI {"\u{1F30E}"}</h1>
          <WikiSearchBar />
        </header>
        <div className="header-divider-container">
          <hr className="header-divider" />
        </div>
        <div className="goodartwiki-content">
          <WikiSidebar />
          <main className="wiki-main-content">
            <h2>Fraudulent exports</h2>
            <div className="info-box right-box">
              <div className="title-info-box">
                <h2>Apparel</h2>
              </div>
              <div className="globe-emoji">{"\u{1F452}"}</div>
              <div className="title-info-box">(Hat with Bow on iOS 17.4)</div>
              <table className="quick-facts">
                <tbody>
                  <tr>
                    <th>Launched</th>
                    <td>2014</td>
                  </tr>
                  <tr>
                    <th>Contributors</th>
                    <td>Global art community</td>
                  </tr>
                  <tr>
                    <th>Languages</th>
                    <td>Multiple</td>
                  </tr>
                  <tr>
                    <th>Focus</th>
                    <td>Visual arts, performing arts, digital arts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              "Fraudulent Exports" was an art project and social experiment launched in late 2016. The project centered around a provocative t-shirt design featuring an anatomically correct vulva, sold at the intentionally exorbitant price of $300,000. Combining elements of fashion, performance art, and social commentary, "Fraudulent Exports" sought to highlight issues of gender wage disparity and commodification of the female body.
            </p>
            <div className="info-box left-box">
              <h3>Community Stats</h3>
              <div className="globe-emoji">{"\u{1F4F0}"}</div>
              <div className="title-info-box">(Newspaper on iOS 17.4)</div>
              <ul>
                <li>Active Users: 10,000+</li>
                <li>Articles: 50,000+</li>
                <li>Daily Edits: ~500</li>
                <li>Languages: 25</li>
              </ul>
            </div>
            <h3>Overview</h3>
            <p>"Fraudulent Exports" was a multifaceted project that integrated several artistic and social elements to create a powerful statement on gender inequality and body politics. At its core was a limited-edition t-shirt featuring an anatomically correct vulva design, priced at $300,000 to reflect the average lifetime earnings gap between men and women with bachelor's degrees at the time of the project's launch.</p>
<p>"Fraudulent Exports" was a multifaceted project that integrated several artistic and social elements to create a powerful statement on gender inequality and body politics. At its core was a limited-edition t-shirt featuring an anatomically correct vulva design, priced at $300,000 to reflect the average lifetime earnings gap between men and women with bachelor's degrees at the time of the project's launch.</p>
<h3>The T-Shirt</h3>
<p>The centerpiece of the project was a t-shirt featuring an anatomically correct depiction of a vulva. Priced at $300,000, the shirt was not merely a garment but a statement piece designed to shock and provoke thought. The price was deliberately set to reflect the average lifetime earnings gap between men and women with bachelor's degrees at the time of the project's launch.</p>
<h3>Marketing</h3>
<p>A select group of 30 individuals were chosen to wear the t-shirt while walking around New York City. This performance aspect of the project aimed to create a living, mobile exhibition that brought the artwork into public spaces, challenging observers to confront their reactions to both the imagery and the concept behind it.</p>
<p>Accompanying the t-shirts were educational pamphlets that provided detailed information about the anatomy depicted in the design. These pamphlets served an educational purpose, promoting body literacy and awareness.</p>
<h3>Website</h3>
<p>"Fraudulent Exports" featured a website designed to mimic the aesthetic of early internet sites from the 1990s. This design choice was intended to evoke nostalgia or to contrast the modern issues being addressed with an outdated digital presentation.</p>
            <h3>Themes and Interpretation</h3>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtWiki;
