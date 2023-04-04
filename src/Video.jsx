import React from "react";

function Video() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h4>Video Downloader</h4>
      <h1>Video Downloader</h1>
      <input type="text" />
      <button onClick={handleClick}></button>
    </div>
  );
}

export default Video;
