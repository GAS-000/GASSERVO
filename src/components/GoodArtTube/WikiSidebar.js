import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const topLinks = [
    { name: "HM", path: "/", emoji: "\u{1F680}" },
    { name: "PRTFL", path: "/goodarttube", emoji: "\u{1F4FC}" },
    { name: "PRJCT", path: "/goodartwiki", emoji: "\u{1F310}" },
    { name: "SHP", path: "/goodartshop", emoji: "\u{1F460}" },
    { name: "FRM", path: "/gaschat", emoji: "\u{1F4D3}" },
  ];

  const bottomLinks = [
    { name: "art", path: "/art", emoji: "\u{1F3A8}" },
    { name: "music", path: "/DustyJawn", emoji: "\u{1F3BB}" },
    { name: "philosophy", path: "/philosophy", emoji: "\u{1F9E0}" },
    { name: "science", path: "/science", emoji: "\u{1F9EA}" },
    { name: "history", path: "/history", emoji: "\u{1F5FF}" },
    { name: "random", path: "/random", emoji: "\u{1F961}" },
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
            <span className="sidebar-emoji">{"\u{1F4DE}"}</span>
            CNTCT
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
