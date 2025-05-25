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
            <h2>GoodArtSucks</h2>
            <div className="info-box right-box">
              <div className="title-info-box">
                <h2>GoodArtSucks</h2>
              </div>
              <div className="globe-emoji">{"\u{1F310}"}</div>
              <div className="title-info-box">
                (Globe with Meridians on iOS 17.4)
              </div>
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
              GoodArtSucks is a collaborative art platform and <Link to="/Philosophy" className="wiki-link">philosophy</Link>. A comprehensive
              resource dedicated to exploring the nature and boundaries of art.
              Founded in New York City in 2014, it began as a humble Tumblr blog
              before evolving into an Instagram page and eventually a
              full-fledged website. The platform distinguishes itself by
              encouraging open collaboration and the relentless pursuit of
              knowledge across a wide spectrum of artistic disciplines.
              GoodArtSucks covers an extensive range of topics, including
              traditional art forms, contemporary practices, influential art
              movements, and emerging digital art technologies.
            </p>
            <p></p>
            <p>
              Fostering open collaboration and the pursuit of knowledge across
              various art forms. Founded in New York in 2014, it evolved from a
              Tumblr blog to an Instagram page, gaining recognition through
              innovative experiential art projects.
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
            <h3>Origins and Early Projects</h3>
            <p>
              GoodArtSucks was founded by{" "}
              <Link to="/Jonathan" className="wiki-link">
                Jonathan
              </Link>{" "}
              in 2014, initially as a Tumblr blog that quickly gained traction
              among art enthusiasts and creators. The platform's rise to
              prominence can be attributed to a series of provocative and
              thought-provoking experiential art projects that challenged
              conventional notions of art and consumer culture.
            </p>
            <p>
              The first major project that brought GoodArtSucks into the
              spotlight was{" "}
              <Link to="/FraudExports" className="wiki-link">
                Fraudulent Exports
              </Link>
              . This social experiment revolved around the procurement of a rare
              and highly sought-after t-shirt featuring a cartoon vulva. The
              project not only explored the intersection of art and commerce but
              also delved into the psychology of scarcity and desire in consumer
              culture. By creating artificial demand for a seemingly mundane
              object, GoodArtSucks prompted discussions about value attribution
              and the nature of collectibles in the art world.
            </p>
            <p>
              Following the success of{" "}
              <Link to="/FraudExports" className="wiki-link">
                Fraudulent Exports
              </Link>{" "}
              GoodArtSucks launched{" "}
              <Link to="/AboveHuman" className="wiki-link">
                Above Human
              </Link>{" "}
              a project that coincided with the 20th anniversary of the infamous
              Heaven's Gate cult incident. This provocative endeavor involved
              the meticulous recreation of the cult members' uniforms. By
              repurposing these loaded symbols, the project encouraged
              reflection on the power of clothing in group identity, the allure
              of fringe beliefs, and the thin line between devotion and
              delusion.{" "}
              <Link to="/AboveHuman" className="wiki-link">
                Above Human
              </Link>{" "}
              sparked conversations about the role of art in examining
              historical events and societal phenomena.
            </p>
            <p>
              The final project in this early trilogy was{" "}
              <Link to="/HelloAgain" className="wiki-link">
                Hello Again
              </Link>
              , an homage to Shaye St John, a fictional online character known
              for surreal and campy comedy videos. This project marked a shift
              in GoodArtSucks' approach, blending elements of performance art,
              digital media, and fashion.{" "}
              <Link to="/HelloAgain" className="wiki-link">
                Hello Again
              </Link>{" "}
              was the last known project to feature clothing in conjunction with
              social experiments and mixed media content. By paying tribute to
              an obscure internet phenomenon, GoodArtSucks highlighted the
              platform's ability to bridge various forms of creative expression
              and subcultures.
            </p>
            <h3>Expansion and Collaborations</h3>
            <p>
              As GoodArtSucks gained recognition within artistic circles, it
              began to expand its reach by collaborating with a diverse array of
              media entities. The platform's unique approach attracted
              partnerships in television, film, journalism, music, and fine art.
              These collaborations allowed GoodArtSucks to explore new mediums
              and reach wider audiences while maintaining its core ethos of
              challenging artistic norms.
            </p>
            <p>
              A significant milestone in the platform's growth was its foray
              into the music industry. A notable example was the collaboration
              with rapper Famous Dex for his track "Japan." This partnership
              demonstrated the platform's ability to seamlessly integrate music
              and visual art, further cementing GoodArtSucks' position within
              the creative zeitgeist.
            </p>
            <h3>Current Focus</h3>
            <p>
              The trajectory of GoodArtSucks took an unexpected turn following a
              reshuffling of personnel and personal challenges faced by founder
              Jonathan. These events led to a strategic shift in the platform's
              operations. GoodArtSucks began to operate more behind the scenes,
              taking on a variety of projects for musicians, artists, and
              fashion labels while maintaining a deliberately low profile.
            </p>
            <p>
              This period of transition saw GoodArtSucks step back from its
              prominent Instagram presence, choosing instead to focus on more
              subtle and nuanced forms of artistic expression and collaboration.
              The platform's evolution reflected a disgust towards social
              media's role in creative collaboration,and moved to more
              introspective and industry-focused endeavors, where they can
              affect the system more directly.
            </p>
            <h3>GoodArt.Sucks</h3>
            <p>
              The current iteration of the platform, now known as GoodArt.Sucks,
              represents a return to the project's roots while incorporating the
              lessons and experiences gained over the years. The website serves
              as a digital sandbox, providing a space for artists, thinkers, and
              creatives to explore and experiment without the constraints of
              traditional artistic boundaries.
            </p>
            <p>
              GoodArt.Sucks aims to foster connections between diverse creative
              minds, encouraging the cross-pollination of ideas and techniques.
              By providing a platform for organic collaboration, the site
              facilitates the emergence of fresh perspectives and innovative
              artistic approaches.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtWiki;
