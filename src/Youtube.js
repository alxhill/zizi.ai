import React from "react";
import YouTube from "react-youtube";

class ControlledYoutube extends React.Component {
  render() {
    var playerOpts = {
      height: "390",
      width: "640",
      videoId: "",
      playsinline: "1",
      playerVars: { autoplay: 0, autohide: 1, playsinline: 1 },
    };
    var style = {
      //   display: "none",
    };

    var yt = (
      <YouTube videoId="0F28IYnEqKY" opts={playerOpts} onReady={this.onReady} />
    );

    window.yt = yt;

    return <div style={style}>{yt}</div>;
  }

  onReady(event) {
    console.log(event);
  }
}

export default ControlledYoutube;
