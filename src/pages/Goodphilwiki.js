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
            <h2>GoodArtSucks (Philosophy)</h2>
            <div className="info-box right-box">
              <div className="title-info-box">
                <h2>GoodArtSucks</h2>
              </div>
              <div className="globe-emoji">{"\u{1F9E0}"}</div>
              <div className="title-info-box">(Brain on iOS 17.4)</div>
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
              At its core,{" "}
              <Link to="/GoodArtWiki" className="wiki-link">
                GoodArtSucks
              </Link>{" "}
              is characterized by its unwavering commitment to open
              collaboration and the exploration of art's role in society. The
              platform consistently pushes the boundaries of what is considered
              art, challenging both creators and audiences to reconsider their
              preconceptions.
            </p>
            <p>
              The integration of various media forms and technologies remains a
              hallmark of GoodArtSucks' approach. By embracing both traditional
              and cutting-edge artistic methods, the platform stays at the
              forefront of creative expression. The use of social experiments
              and guerrilla marketing techniques, which defined many of its
              early projects, continues to influence the platform's ethos,
              encouraging artists to engage with their audience in
              unconventional ways.
            </p>
            <p>
              GoodArtSucks maintains its focus on connecting creators and
              fostering organic creativity. The platform serves as an incubator
              for ideas, providing resources and support for artists to develop
              their concepts and bring them to fruition. This collaborative
              environment encourages the cross-pollination of ideas across
              disciplines, leading to unique and innovative artistic
              expressions.
            </p>
            <p>
              As the art world continues to evolve, GoodArtSucks remains
              committed to its role as a dynamic hub for artistic exploration
              and collaboration. By continually adapting its approach and
              embracing new forms of creative expression, the platform ensures
              its relevance in the ever-changing landscape of contemporary art.
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
            <h2>Interpretation</h2>
            <p>
              The phrase "good art sucks" is paradoxical and can be interpreted
              in a few ways, often depending on the context in which it's used.
              Here are some possible interpretations:
            </p>
            <h3>Subjective Nature of Art:</h3>
            <p>
              At its core, this interpretation acknowledges the deeply personal
              and individualistic nature of artistic appreciation. Art, in all
              its forms, elicits varied responses from different viewers based
              on their personal experiences, cultural backgrounds, emotional
              states, and aesthetic preferences.
            </p>
            <p>
              The statement "Good Art Sucks" could be seen as a provocative
              expression of this subjectivity. It challenges the notion of
              universal artistic standards by suggesting that even widely
              acclaimed or popularly "good" art may not resonate with everyone.
              This interpretation highlights the disconnect that can occur
              between critical or popular consensus and individual taste.
            </p>
            <p>
              For example, a person might find themselves unmoved by a
              critically acclaimed abstract expressionist painting, while being
              deeply touched by a piece of street art. Their declaration that
              "good art sucks" could be a way of asserting their personal taste
              against prevailing artistic norms.
            </p>
            <p>
              This perspective encourages a more democratic view of art
              appreciation, where individual responses are valued over
              institutional or critical endorsements.
            </p>
            <h3>Challenge to Conventional Standards:</h3>
            <p>
              This interpretation positions the phrase as a critique of
              mainstream or institutionally sanctioned art. It suggests a
              rebellion against established artistic canons and the gatekeepers
              of the art world.
            </p>
            <p>
              By declaring that "good art sucks," one might be expressing
              dissatisfaction with art that adheres too closely to conventional
              standards of technique, subject matter, or style. This view often
              aligns with counter-cultural or avant-garde movements in art
              history, which have sought to disrupt and redefine what is
              considered "good" in art.
            </p>
            <p>
              The statement could be seen as a call for more innovation,
              authenticity, or risk-taking in art. It might suggest that art
              which is widely accepted as "good" has become stagnant,
              predictable, or disconnected from contemporary realities.
            </p>
            <p>
              This interpretation often goes hand-in-hand with a critique of the
              commercialization of art, arguing that what is marketed as "good
              art" may prioritize marketability over genuine artistic expression
              or social commentary.
            </p>
            <h3>Artistic Growth:</h3>
            <p>
              In colloquial usage, "sucks" can sometimes mean "is challenging"
              or "is difficult." Viewed through this lens, the phrase "good art
              sucks" takes on a more positive connotation, suggesting that truly
              valuable art presents challenges to both its creator and its
              audience.
            </p>
            <p>
              This interpretation aligns with the idea that growth often comes
              from discomfort or struggle. In the context of art, it suggests
              that "good" art should Challenge the artist: Pushing them to
              develop new techniques, explore uncomfortable themes, or take
              creative risks. As well as Challenge the viewer: Encouraging
              deeper thought, emotional engagement, or a reconsideration of
              previously held beliefs.
            </p>
            <p>
              Under this interpretation, art that "sucks" – that is, art that is
              difficult or challenging – is precisely what drives artistic and
              personal growth. It values art that provokes, confuses, or even
              offends over art that merely pleases or decorates.
            </p>
            <p>
              This view celebrates art that falls outside one's comfort zone,
              suggesting that the struggle to create or understand such art is
              integral to its value.
            </p>
            <h3>Irony:</h3>
            <p>
              Lastly, the phrase can be interpreted as an ironic or humorous
              statement designed to provoke thought and discussion about the
              nature of art and personal taste.
            </p>
            <p>
              Used in this way, "Good Art Sucks" becomes a conversation starter,
              a way to challenge assumptions and encourage deeper reflection on
              what we value in art and why. It playfully subverts expectations,
              using the apparent contradiction between "good" and "sucks" to
              highlight the complexities of artistic appreciation.
            </p>
            <p>
              This interpretation often accompanies a postmodern or
              meta-approach to art criticism. It acknowledges the often circular
              and subjective nature of artistic discourse, using humor and irony
              to cut through pretension and encourage more open, honest
              discussions about art.
            </p>
            <p>
              In a broader sense, this use of the phrase embodies the spirit of
              questioning and critical thinking that is central to many artistic
              movements. It encourages viewers to move beyond passive
              consumption of art and engage more actively with the works they
              encounter, forming and articulating their own opinions rather than
              relying on established critics or institutions.
            </p>
            <p>
              By embracing contradiction and humor, this interpretation of "Good
              Art Sucks" opens up space for more nuanced, playful, and inclusive
              discussions about the role and value of art in our lives and
              societies.
            </p>
            <h2>"I Probably Stole It"</h2>
            <p>
              The phrase <Link to="/IStoleIt" className="wiki-link">
                "I Probably Stole It"
              </Link>{" "} reflects the idea that art is often a culmination of inspiration, borrowing, and reinterpreting existing ideas, themes, or styles. How difficult it is to create something entirely original, recognizing that much of art is a remix of what has come before. 
            </p>
            <p>This is also a humble admission, that all  work is part of a larger conversation within the art world, where influences are inevitable and sometimes unconsciously absorbed.</p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtWiki;
