import React from "react";
import YouTube from "react-youtube";

function Youtube() {
  var playerOpts = {
    height: "390",
    width: "640",
    videoId: "",
    playsinline: "1",
    playerVars: { autoplay: 0, autohide: 1, playsinline: 1 },
  };

  return (
    <div style="display: none">
      <YouTube videoId="0F28IYnEqKY" opts={playerOpts} />
    </div>
  );
}

export default Youtube;
