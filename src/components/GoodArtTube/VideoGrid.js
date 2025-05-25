import React from "react";

const VideoGrid = () => {
  const placeholders = Array(9).fill(null);

  return (
    <div className="video-grid">
      {placeholders.map((_, index) => (
        <div key={index} className="video-placeholder"></div>
      ))}
    </div>
  );
};

export default VideoGrid;
