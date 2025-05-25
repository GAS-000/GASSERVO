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
            <h2>Jonathan</h2>
            <div className="info-box right-box">
              <div className="title-info-box">
                <h2>Jonathan</h2>
              </div>
              <table className="quick-facts">
                <tbody>
                  <tr>
                    <th>Born</th>
                    <td>November 22nd, 1991</td>
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
              <Link to="/GoodArtWiki" className="wiki-link">
                GoodArtSucks
              </Link>{" "}
              is a collaborative platform for artists and art enthusiasts to
              share knowledge about various art forms, techniques, and art
              history. It aims to be a comprehensive resource for anyone
              interested in exploring the world of art. The platform encourages
              open collaboration and uses a wiki-based editing system, allowing
              users from around the globe to contribute their expertise and
              insights.
            </p>
            <p>
              Covering a wide range of topics including traditional art forms,
              contemporary practices, art movements, and emerging digital art
              technologies, GOODART.WIKI serves as a dynamic encyclopedia of
              artistic knowledge. It not only provides information on
              established art forms but also keeps pace with the rapidly
              evolving digital art landscape, making it a valuable resource for
              both traditional and new media artists.
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
            <h3>Biography</h3>
            <p>
              GOODART.WIKI was founded in early 2023 by a group of artists, art
              historians, and technologists who recognized the need for a
              centralized, user-driven platform dedicated to art knowledge.
              Inspired by the success of Wikipedia, they aimed to create a
              specialized wiki that would cater specifically to the art
              community's needs.
            </p>
            <p>
              The platform's development was marked by rapid {" "}
              <Link to="/AboveHuman" className="wiki-link">
                growth
              </Link>{" "}, with
              thousands of artists and art enthusiasts joining within the first
              few months of its launch. The community-driven approach allowed
              for the quick accumulation of diverse and in-depth content,
              ranging from ancient art techniques to cutting-edge digital art
              innovations.
            </p>
            <h3>Impact on Art Education</h3>
            <p>
              {" "}
              <Link to="/DustyJawn" className="wiki-link">
                since
              </Link>{" "} its inception, GOODART.WIKI has had a significant impact on
              art education. Many art schools and universities now use it as a
              supplementary resource in their curricula. The platform's
              accessibility and comprehensive coverage have made it particularly
              valuable for self-taught artists and those in areas with limited
              access to formal art education.
            </p>
            <p>
              Furthermore, GOODART.WIKI has become a hub for artistic
              collaboration and idea exchange. Artists from different parts of
              the world can share techniques, discuss art history, and
              collaborate on projects, fostering a global art community that
              transcends geographical boundaries.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtWiki;
