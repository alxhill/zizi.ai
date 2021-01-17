import Hls from "hls.js";
import { SkipNextRounded } from "@material-ui/icons";
import React from "react";
import { sideCurtain, backCurtain } from "./Curtain";
import { Forward10, Back10, Fullscreen, FullscreenExit } from "./Buttons";
import YouTube from "react-youtube";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: true,
      password: "",
      currentTime: 0,
    };
    this.video = React.createRef();
  }

  componentDidMount() {
    window.yt = this.player
  }

  componentDidUpdate() {
  }

  externalLink(ref, content) {
    return <a target='_blank' rel="noopener noreferrer" href={ref}>{content}</a>;
  }

  render() {
    let fullscreen = this.state.fullscreen ? (
      <FullscreenExit onClick={this.fullscreenexit} />
    ) : (
        <Fullscreen onClick={this.fullscreen} />
      );

    const playerOpts = {
      playsinline: "1",
      playerVars: { autoplay: 1, autohide: 0, playsinline: 1, start: 0, frameborder: 0, controls: 1 },
    };

    if (this.state.entered) {
      return (
        <div className="enter-screen">

          <YouTube className="zizi-intro-video" videoId="hBlB8RAJEEc" opts={playerOpts} onReady={this._onReady} />

          <div className="controls">
            <button className="skip-intro" onClick={this.props.onEnter}>
              Skip
              <SkipNextRounded fontSize="inherit" />
            </button>
          </div>
        </div >
      );
    }

    return (
      <div className="enter-screen">
        <img
          src={"img/curtain-intro.jpg"}
          className="curtain-bg "
          draggable={false}
          alt=""
        />
        {sideCurtain(false)}

        <button type="button" className="enter" onClick={this.attemptLogin}>
          <img src="img/enterButtonFull.png" alt="Enter the Zizi show" />
        </button>
        <form className="intro-text" onSubmit={this.attemptLogin}>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePassword}
            placeholder="Password"
          />
          <p>
            <p><i>Private pre-Release<br />
            Please do not share</i></p>
            <p>A Deepfake Drag experience by {this.externalLink("https://www.jakeelwes.com/", "Jake Elwes")}<br />
            in Collaboration with 13 of the UK's top drag artists</p>

            <small>
              <p>The Zizi Show is part of {this.externalLink("https://newreal.cc/", "The New Real")} by {this.externalLink("https://efi.ed.ac.uk/activity-and-partners/experiential-ai", "Edinburgh Futures Institute")}</p>
            </small>
          </p>
        </form>
      </div>
    );
  }


  fullscreen = () => {
    var elem = document.documentElement;
    this.setState({ fullscreen: true });
    this.setState({ currentTime: this.video.current.currentTime });
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setTimeout(() => this.refreshTime(this.state.currentTime), 100);
    } else if (elem.webkitRequestFullscreen) { /* Safari × Unhandled Rejection (NotAllowedError) ... user denied permission. */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    // setTimeout(this.refreshTime(), 500);
  };

  fullscreenexit = () => {
    this.setState({ fullscreen: false });
    this.setState({ currentTime: this.video.current.currentTime });
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setTimeout(() => this.refreshTime(this.state.currentTime), 100);
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen(this.video.current.currentTime);
    }
    // setTimeout(this.refreshTime(), 500);
  };

  onForward10 = () => {
    this.video.current.currentTime += 10;
  };

  onBack10 = () => {
    this.video.current.currentTime += -10;
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  refreshTime = (time) => {
    console.log(time);
    this.video.current.currentTime += time;
  };

  youtubeReady = (event) => {
    this.player = event.target;
    this.player.seekTo(this.props.song.youtube.startTime)
    this.player.pauseVideo()
  };

  attemptLogin = (event) => {
    if (event !== null) {
      event.preventDefault();
    }
    if (btoa(this.state.password) === "ZGVlcGZha2U=") {
      this.setState({ entered: true });
    } else {
      alert("Invalid password!");
    }
  };

  handleHls(video) {
    if (
      Hls.isSupported() &&
      !video.canPlayType("application/vnd.apple.mpegurl")
    ) {
      var hls = new Hls();
      hls.loadSource(video.querySelector("source").src);
      hls.attachMedia(video);
    }
  }
}
