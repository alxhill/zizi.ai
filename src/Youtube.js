import React from "react";
import YouTube from "react-youtube";
import { Play, Pause } from "./Buttons";
import DragPlayer from "./DragPlayer";

class ControlledYoutube extends React.Component {
  static defaultProps = {
    startTime: 6.18,
  };

  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  render() {
    var playerOpts = {
      height: "390",
      width: "640",
      videoId: "",
      playsinline: "1",
      playerVars: { autoplay: 0, autohide: 1, playsinline: 1 },
    };
    var style = {
      display: "none",
    };

    var hiddenYtPlayer = (<div style={style}>
      <YouTube videoId="0F28IYnEqKY" opts={playerOpts} onReady={this.onReady} />
      </div>
    );

    var buttons = null;
    if (this.state.isLoaded) {
      buttons = (
        <div className="buttons">
          <span className="timer">{this.state.timer}</span>
          <Play onClick={this.play} />
          <Pause onClick={this.pause} />
        </div>
      );
    }

    return (
      <div>
        {hiddenYtPlayer}
        {buttons}
        <DragPlayer/>
      </div>
    );
  }

  onReady = (event) => {
    this.setState({ isLoaded: true, timer: "0" });
    this.playerElement = event.target;
    this.timerID = setInterval(() => {
      this.setState({ timer: this.playerElement.getCurrentTime().toFixed(2) });
    }, 50);
  };

  play = () => {
    if (!this.state.isLoaded) {
      return;
    }

    if (this.playerElement.getCurrentTime() < this.props.startTime) {
      this.playerElement.seekTo(this.props.startTime);
    } else {
      this.playerElement.playVideo();
    }
  };

  pause = () => {
    if (!this.state.isLoaded) {
      return;
    }

    this.playerElement.pauseVideo();
  };
}

export default ControlledYoutube;
