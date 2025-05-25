import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const topLinks = [
    { name: "HM", path: "/", emoji: "\u{1F3E0}" },
    { name: "PRTFL", path: "/goodarttube", emoji: "\u{1F4C1}" },
    { name: "PRJCT", path: "/goodartwiki", emoji: "\u{1F4A1}" },
    { name: "SHP", path: "/goodartshop", emoji: "\u{1F6D2}" },
    { name: "FRM", path: "/gaschat", emoji: "\u{1F4AC}" },
  ];

  const bottomLinks = [
    { name: "music videos", path: "/music-videos", emoji: "\u{1F4BF}" },
    { name: "lyric videos", path: "/lyric-videos", emoji: "\u{1F521}" },
    { name: "series", path: "/series", emoji: "\u{1F4FA}" },
    { name: "content", path: "/content", emoji: "\u{1F4FC}" },
    { name: "documentary", path: "/documentary", emoji: "\u{1F3A5}" },
    { name: "misc.", path: "/misc", emoji: "\u{1F9EC}" },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="top-links">
          {topLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>
                <span className="sidebar-emoji">{link.emoji}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="sidebar-divider" />
        <ul className="bottom-links">
          {bottomLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>
                <span className="sidebar-emoji">{link.emoji}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <hr className="sidebar-divider" />
        <div className="contact-link">
          <Link to="/ContactUs">
            <span className="sidebar-emoji">{"\u{1F4F1}"}</span>
            CNTCT
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
