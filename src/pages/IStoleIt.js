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
            <h2>"I Probably Stole It"</h2>
            <div className="info-box right-box">
              <div className="title-info-box">
                <h2>Slogan</h2>
              </div>
              <div className="globe-emoji">{"\u{1F693}"}</div>
              <div className="title-info-box">(Police Car on iOS 17.4)</div>
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
              "I probably stole it" is a phrase used in artistic contexts, particularly by visual artists and musicians, to describe their creative process or the origins of their work. This self-reflexive statement reflects complex ideas about originality, influence, and appropriation in art.
            </p>
            <div className="info-box left-box">
              <h3>Community Stats</h3>
              <ul>
                <li>Active Users: 10,000+</li>
                <li>Articles: 50,000+</li>
                <li>Daily Edits: ~500</li>
                <li>Languages: 25</li>
              </ul>
            </div>
            <h2>Meaning and usage</h2>
            <p>
              The phrase "I probably stole it" is often used humorously or self-deprecatingly by artists when discussing their work. It can be interpreted in several ways:
            </p>
            <h3>Acknowledgment of influence</h3>
            <p>
              Artists often draw inspiration from other artists' work, techniques, or ideas. This phrase acknowledges that creativity rarely exists in a vacuum, and most artistic creations build upon or are influenced by existing works.
            </p>
            <h3>Unconscious appropriation</h3>
            <p>
               Sometimes artists unknowingly incorporate elements they've seen elsewhere into their own work. This phrase could be a self-aware admission of this phenomenon.
            </p>
            <h3>Imposter syndrome</h3>
            <p>
               Many artists struggle with feelings of inadequacy. Saying "I probably stole it" could be a self-deprecating way of expressing doubt about one's own originality or talent.
            </p><h3>Remix culture</h3>
            <p>
              In contemporary art, the practice of appropriation or remixing existing works is common. The phrase might refer to the deliberate use of elements from other artists' work to create something new.
            </p>
            <h3>Humility</h3>
            <p>
              It could be a humble way of acknowledging the artist's place in a long lineage of creators, rather than claiming to have invented something entirely new.
            </p>
            <h2>Historical context</h2>
            <p>
              The concept of artistic "theft" or appropriation has a long history in art theory and practice.Postmodern ideas have long questioned question the concepts of originality and authorship in art. Notable examples include:
            </p>
            <p>
              Pablo Picasso's often-quoted statement, "Good artists copy, great artists steal."
            </p>
            <p>
              T. S. Eliot's essay "Tradition and the Individual Talent" (1919), which argues that all great poetry is in conversation with what came before it.
            </p>
            <p>
              The rise of appropriation art in the 1980s, exemplified by artists like Sherrie Levine and Richard Prince.
            </p>
            <h2>Legal implications</h2>
            <p>
              While the phrase is often used lightheartedly, in some cases, it could be a tongue-in-cheek reference to copyright issues or the fine line between inspiration and infringement in the art world. It touches on serious issues of copyright and intellectual property in art. The line between inspiration and infringement can be legally complex, particularly in fields like music sampling and visual collage.
            </p>
            <h2>Cultural impact</h2>
            <p>
              The phrase reflects broader cultural shifts in understanding authorship and originality, particularly in the digital age. It has gained prominence with the rise of internet meme culture and the increasing ease of sharing and remixing content online.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtWiki;
