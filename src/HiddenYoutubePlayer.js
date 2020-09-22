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
    glass: {
      id: "XjVNlG5cZyQ",
      startTime: 6.18,
    },
  };


// ID's to switch between
// "IWm03wYBTbM"
// "0-zqlgyUkd0"
// "AsxB259zyLc"
// "XjVNlG5cZyQ"
// "RbCvjxjGiKE"
// "Ifr13Upytb4"
// "9NyxQYPk1RY"


// ID's to switch between (with names)
// // Five years - David Bowie
// "IWm03wYBTbM"
// // Freedom 90' - George Michael
// "0-zqlgyUkd0"
// // I Am What I Am - La Cage aux Folles (2010 Broadway revival)
// "AsxB259zyLc"
// // Raise Your Glass - P!nk
// "XjVNlG5cZyQ"
// // Nancy Boy - Placebo
// "RbCvjxjGiKE"
// // You Make Me Feel (Mighty Real) - Sylvester
// "Ifr13Upytb4"
// // This Is My Life (La Vita) - Shirley Bassey
// "9NyxQYPk1RY"

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
