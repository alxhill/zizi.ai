import React from "react";
import YouTube from "react-youtube";

export default class HiddenYoutubePlayer extends React.Component {
  static defaultProps = {
    playing: false,
    hideTimer: true,
    onReady: () => {},
    adjustedTimerEvent: () => {}
  };

  actVideoMetadata = {
    fiveyears: {
      id: "IWm03wYBTbM",
      startTime: 0.00,
    },
    freedom: {
      id: "0-zqlgyUkd0",
      startTime: 0.00,
    },
    iam: {
      id: "AsxB259zyLc",
      startTime: -5.00,
    },
    glass: {
      id: "XjVNlG5cZyQ",
      startTime: 0.00,
    },
    nancy: {
      id: "RbCvjxjGiKE",
      startTime: 0.00,
    },
    mighty: {
      id: "Ifr13Upytb4",
      startTime: 0.00,
    },
    mylife: {
      id: "9NyxQYPk1RY",
      startTime: 0.00,
    },
  };

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, timer: 0 };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing && !this.props.playing) {
      this.pause();
    } else if (!prevProps.playing && this.props.playing) {
      this.play();
    }

    window.yt = this.player
  }

  render() {
    var playerOpts = {
      height: "390",
      width: "640",
      videoId: "",
      playsinline: "1",
      playerVars: { autoplay: 0, autohide: 1, playsinline: 1 },
    };

    return (
      <div>
        <div style={{ display: "none" }}>
          <YouTube
            videoId={this.actVideoMetadata[this.props.act].id}
            opts={playerOpts}
            onReady={this.youtubeReady}
          />
        </div>
        {this.props.hideTimer || (
          <span className="timer">{this.state.timer}</span>
        )}
      </div>
    );
  }

  youtubeReady = (event) => {
    this.player = event.target;
    this.player.seekTo(this.actVideoMetadata[this.props.act].startTime)
    this.player.pauseVideo()
    this.props.onReady();
  };

  play() {
    let { startTime } = this.actVideoMetadata[this.props.act];

    if (this.player.getCurrentTime() < startTime) {
      this.player.seekTo(startTime);
    } else {
      this.player.playVideo();
    }

    this.timerIntervalID = setInterval(this.updateTimer, 100);
  }

  pause() {
    this.player.pauseVideo();
    clearInterval(this.timerIntervalID);
  }

  updateTimer = () => {
    let { startTime } = this.actVideoMetadata[this.props.act];
    let playerTime = this.player.getCurrentTime();

    this.setState({ timer: playerTime.toFixed(2) });
    this.props.adjustedTimerEvent(playerTime-startTime);
  }
}
