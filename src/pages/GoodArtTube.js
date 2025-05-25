import React from "react";
import VideoGrid from "../components/GoodArtTube/VideoGrid";
import Sidebar from "../components/GoodArtTube/Sidebar";
import SearchBar from "../components/GoodArtTube/SearchBar";
import { useColor } from "../contexts/ColorContext";
import "../styles/goodarttube.css";

function GoodArtTube() {
  const { backgroundColor } = useColor();

  return (
    <div className="goodarttube-container" style={{ backgroundColor }}>
      <div className="landing-page" style={{ backgroundColor }}>
      <header className="landing-header">
          <h1>GOODART.TUBE</h1>
          <SearchBar />
        </header>
        <div className="header-divider-container">
          <hr className="header-divider" />
        </div>
        <div className="goodarttube-content">
          <Sidebar />
          <main>
            <VideoGrid />
          </main>
        </div>
      </div>
    </div>
  );
}

export default GoodArtTube;
