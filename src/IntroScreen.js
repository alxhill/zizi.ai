import Hls from "hls.js";
import { SkipNextRounded } from "@material-ui/icons";
import React from "react";
import { sideCurtain, backCurtain } from "./Curtain";
import { Forward10, Back10, Fullscreen, FullscreenExit } from "./Buttons";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false,
      password: "",
    };
    this.video = React.createRef();
  }

  componentDidMount() {
    if (this.video.current) {
      this.handleHls(this.video.current);
    }
  }

  componentDidUpdate() {
    if (this.video.current) {
      this.handleHls(this.video.current);
    }
  }

  render() {
    let fullscreen = this.state.fullscreen ? (
      <FullscreenExit onClick={this.fullscreenexit} />
    ) : (
      <Fullscreen onClick={this.fullscreen} />
    );

    if (this.state.entered) {
      return (
        <div className="enter-screen">
          <video
            className="zizi-intro-video"
            onEnded={this.props.onEnter}
            ref={this.video}
            playsInline={true}
            autoPlay={true}
          >
            <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/intro/playlist.m3u8" />
          </video>

          <div className="controls">
            <Back10 onClick={this.onBack10} />
            <Forward10 onClick={this.onForward10} />
            {fullscreen}
            <button className="skip-intro" onClick={this.props.onEnter}>
              Skip Intro
              <SkipNextRounded fontSize="inherit" />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="enter-screen">
        {backCurtain(false)}
        {sideCurtain(false)}

        <button type="button" className="enter" onClick={this.attemptLogin}>
          <img src="img/enterButton.png" alt="Enter the Zizi show" />
        </button>
        <form className="password" onSubmit={this.attemptLogin}>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePassword}
            placeholder="Password"
          />
          <p>
            <b>BETA version</b>
            <br></br>Works best in Chrome (desktop). <br></br>Known bugs on
            mobile.
          </p>
        </form>
      </div>
    );
  }

  // fullscreen = () => {
  //   this.setState({ fullscreen: true });
  //   this.video.current.requestFullscreen();
  // };

  // fullscreenexit = () => {
  //   this.setState({ fullscreen: false });
  //   this.video.current.requestFullscreen();
  // };

  fullscreen = () => {
    var elem = document.documentElement;
    this.setState({ fullscreen: true });
    // this.video.current.currentTime = parseFloat(this.video.current.currentTime);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    // } else if (elem.webkitRequestFullscreen) { /* Safari × Unhandled Rejection (NotAllowedError) ... user denied permission. */
      //   elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) { /* IE11 */
    //   elem.msRequestFullscreen();
    }
  };

  fullscreenexit = () => {
    this.setState({ fullscreen: false });
    // this.video.current.currentTime = parseFloat(this.video.current.currentTime);
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // } else if (document.webkitExitFullscreen) { /* Safari */
      //   document.webkitExitFullscreen();
      // } else if (document.msExitFullscreen) { /* IE11 */
      //   document.msExitFullscreen();
    }
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
