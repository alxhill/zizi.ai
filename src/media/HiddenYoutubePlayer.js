import React from "react";
import YouTube from "react-youtube";

// In my old one (working with iphone) - it generates this: (have to press play button twice..)
// <iframe id="player" style="display: none" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="390" src="https://www.youtube.com/embed/0F28IYnEqKY?autoplay=1&amp;autohide=1&amp;playsinline=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A8000&amp;widgetid=1"></iframe>
// This one generates this:
// <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="390" src="https://www.youtube.com/embed/XjVNlG5cZyQ?autoplay=0&amp;autohide=1&amp;playsinline=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1" id="widget2"></iframe>
// Looks the same......

export default class HiddenYoutubePlayer extends React.Component {
  static defaultProps = {
    playing: false,
    hideTimer: true,
    onReady: () => {},
    adjustedTimerEvent: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, timer: 0 };
  }

  componentDidUpdate(prevProps) {
    // console.log("youtube" + prevProps.playing);
    if (prevProps.playing && !this.props.playing) {
      this.pause();
    } else if (!prevProps.playing && this.props.playing) {
      this.play();
    }
    window.yt = this.player
  }

  render() {
    var playerOpts = {
      height: "100",
      width: "320",
      videoId: "",
      playsinline: "1",
      playerVars: { autoplay: 0, autohide: 0, playsinline: 1, start: 0, controls: 1 },
    };


    return (
      <div>
        <div className="youtube-iframe">
        {/* <div style={{ display: "none" }}> */}
          <YouTube
            videoId={this.props.song.youtube.id}
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
    this.player.seekTo(this.props.song.youtube.startTime)
    this.player.pauseVideo()
    this.notStarting();
    this.props.onReady();
    this.props.timerDelegate.onTimeChanged((shift) => {
      this.player.seekTo(this.player.getCurrentTime() + shift)
    });
  };

  play() {
    let { startTime } = this.props.song.youtube;

    if (this.player.getCurrentTime() < startTime) {
      this.player.seekTo(startTime);
    } else {
      this.player.playVideo();
    }

    this.timerIntervalID = setInterval(this.updateTimer, 3000);
  }

  pause() {
    this.player.pauseVideo();
    clearInterval(this.timerIntervalID);
  }

  notStarting() {
    if (this.player.getPlayerState() == 1) {
      console.log(this.player.getPlayerState());
      return true
    } else {
      console.log(this.player.getPlayerState());
      this.player.pauseVideo();
      this.props.pause();
      return false
    }
  }

  updateTimer = () => {
    let { startTime } = this.props.song.youtube;
    let playerTime = this.player.getCurrentTime();

    this.setState({ timer: playerTime.toFixed(2) });
    this.props.adjustedTimerEvent(playerTime-startTime);
    this.notStarting();
  }
}
