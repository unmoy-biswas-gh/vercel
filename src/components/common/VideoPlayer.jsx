import React, { useEffect, useRef } from "react";
import introVideo from "../../assets/Video/intro.mp4";

function VideoPlayer() {
  const videoPlayer = useRef(null);
  useEffect(() => {
    videoPlayer.current && videoPlayer.current.play();
  });
  return (
    <video
      src={introVideo}
      ref={videoPlayer}
      loop
      muted
      autoPlay
      style={{ height: "100%", width: "100%", objectFit: "cover" }}
    />
  );
}

export default VideoPlayer;
