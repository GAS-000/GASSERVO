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
            <h2>Above Human</h2>
            <div className="info-box right-box">
              <div className="title-info-box">
              <h2>Apparel</h2>
              </div>
              <div className="globe-emoji">{"\u{1F456}"}</div>
              <div className="title-info-box">
                (Jeans on iOS 17.4)
              </div>
              <table className="quick-facts">
                <tbody>
                  <tr>
                    <th>Release</th>
                    <td>March 2017</td>
                  </tr>
                  <tr>
                    <th>Contributors</th>
                    <td>Jonathan,
                    Lucas,
                    Abel</td>
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
             Above Human was a controversial and multifaceted artistic endeavor that explored themes related to the Heaven's Gate cult, which tragically ended with a mass suicide in 1997. The project, which debuted in March 2017, incorporated elements of video art, music, and fashion to create a provocative and immersive experience for its audience. It blurred the lines between art project and social experiment, inviting participants to engage with and reflect on complex societal issues.
            </p>
            <div className="info-box left-box">
              <h3>Community Stats</h3>
              <div className="globe-emoji">{"\u{1F47D}"}</div>
              <div className="title-info-box">
                (Alien on iOS 17.4)
              </div>
              <ul>
                <li>Active Users: 10,000+</li>
                <li>Articles: 50,000+</li>
                <li>Daily Edits: ~500</li>
                <li>Languages: 25</li>
              </ul>
            </div>
            <h2>Overview</h2>
            <p>
              Above Human follows in the tradition of immersive art projects that blend multiple media forms with social commentary, most notably echoing the approach of the earlier project <Link to="/FraudExports" className="wiki-link">"Fraudulent Exports"</Link>. Like its predecessor, Above Human" utilized a combination of web design, fashion, and visual art to create a comprehensive artistic experience that doubled as a social experiment.
            </p>
<p>Building on this foundation, Above Human consisted of a series of video releases, an original musical score, and a limited clothing line. It aimed to explore the complex and disturbing legacy of the Heaven's Gate cult while raising questions about the nature of belief, group dynamics, and the intersection of technology and spirituality. The project encouraged reflection on the power of clothing in group identity, the allure of fringe beliefs, and the thin line between devotion and delusion.</p>
            <h2>Video Series</h2>
            <p>
              The first video showcased a close-up of Marshall Applewhite, the cult's leader, with his image pixelated and distorted. The second video depicted a crudely drawn Applewhite accompanied by an ominous voice clip and the year 1997. The third installment featured a sketch of a body wrapped in the purple blanket iconic to the cult's mass suicide. The fourth video showed a cartoon Applewhite pouring what appeared to be a toxin into applesauce, referencing the method used in the cult's mass suicide.All animations in the video series were hand-drawn by artist Abel, adding a unique and personal touch to the visual narrative.
            </p>
            <p>
              The final video introduced models wearing recreated versions of the cult members' oversized crew neck sweaters, complete with the "Away Team" patch. This video also included scenes reminiscent of the tragic event, such as the purple blankets.
            </p>
           <h2>Music</h2>
            <p>
              The entire musical score for the project was produced by Lucas Broughton. The compositions notably incorporated samples from real seminars and speeches given by Marshall Applewhite, adding an authentic and chilling dimension to the project.
            </p>
                        <h2>Fashion Line</h2>
            <p>
              A limited clothing line was released as part of the project, consisting of 30 oversized crew neck sweaters, deliberately produced without small or medium sizes to ensure a baggy fit reminiscent of the cult members' attire. The sweaters featured a rainbow embroidered "Above Human" on the chest, a phrase frequently used by Applewhite.The iconic "Away Team" patch from the original cult uniform, was also available for separate purchase.
            </p>
            <p>
             The clothing line gained popularity after being worn by internet personalities, though its limited release kept it scarce.</p>
             <h2>Website</h2>
            <p>
              A key component of Above Human was the website goodartsucks.com. This site served as the primary platform for the project's digital presence and was meticulously designed to replicate the aesthetic and functionality of the original Heaven's Gate website as it appeared in 1997.
            </p>
            <p>
             The website not only hosted the project's video content and information about the clothing line but also served as an immersive element of the artwork itself. By faithfully recreating the look and feel of the cult's original online presence, the project provided viewers with a visceral connection to the time period and the cult's digital footprint..</p>
             <p>This approach to web design, intentionally eschewing modern web standards and aesthetics, further emphasized the project's themes of time, memory, and the evolution of fringe beliefs in the digital age.</p>
                                     <h2>Themes and Interpretation</h2>
            <p>
             The project delved into several complex themes
            </p>
            <h3>Group Identity:</h3>
            <p>
             Through the recreation of the cult's distinctive clothing, the project highlighted how shared attire can foster a sense of belonging and unity within a group.
            </p>
            <h3>Devotion vs. Delusion:</h3>
            <p>
             By presenting the cult's ideology through various artistic mediums, the project invited viewers to contemplate the appeal of unconventional belief systems.</p>
             <h3>Fringe Beliefs:</h3>
            <p>
             By presenting the cult's ideology through various artistic mediums, the project invited viewers to contemplate the appeal of unconventional belief systems.</p>
             <h3>Media and Manipulation:</h3>
            <p>
             The use of video and audio samples raised questions about the role of media in shaping beliefs and perceptions..</p>
              <h2>Legacy</h2>
            <p>
              Above Human garnered significant attention for its provocative subject matter and multidisciplinary approach. While some praised its innovative exploration of a dark chapter in recent history, others criticized it for potentially glorifying or exploiting a tragic event.
            </p>
            <p>
             The fashion line, in particular, sparked debates about the ethics of commodifying cult imagery and the fine line between artistic expression and sensationalism.</p>
             <p>Despite its controversial nature, the project has been noted for its unique approach to examining the Heaven's Gate cult and its impact on popular culture. It has sparked discussions about the role of art in processing historical traumas and the responsibilities of artists when dealing with sensitive subject matter.</p>
             <h2>Artistic Interpretation of "Above Human"</h2>
            <p>
             The phrase "Above Human," which was prominently featured in the project's clothing line and borrowed from Marshall Applewhite's teachings, serves as a central motif and point of artistic interpretation:
            </p>
                        <h3>Transcendence vs. Hubris:</h3>
            <p>
             The phrase encapsulates the tension between spiritual transcendence and dangerous hubris. It reflects the cult's belief in ascending beyond human limitations, while also hinting at the potential dangers of such thinking.
            </p>
            <h3>Identity and Belonging:</h3>
            <p>
             By wearing clothing emblazoned with "Above Human," participants in the project temporarily adopted an identity that set them apart, mirroring the allure of exclusive group membership.</p>
             <h3>Technology and Posthumanism:</h3>
            <p>
              In the context of the Heaven's Gate cult's beliefs about aliens and ascending to a "Next Level," the phrase also touches on themes of technological advancement and posthumanist philosophy.</p>
       <h3>Irony and Critique:</h3>
            <p>The project's use of "Above Human" on consumer goods creates an ironic commentary on the commodification of spiritual beliefs and the human desire for superiority.</p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtWiki;
