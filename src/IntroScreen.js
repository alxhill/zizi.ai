import Hls from "hls.js";
import { FastForwardRounded } from "@material-ui/icons";
import React from "react";
import Curtain from "./Curtain";
import {
  Play,
  Pause,
  Forward10,
  Back10,
  Fullscreen,
  FullscreenExit,
} from "./Buttons";

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
      this.handleHls(this.video.current)
    }
  }

  render() {

    let playPause = this.props.playing ? (
      <Play onClick={this.props.onPause} />
    ) : (
        <Pause onClick={this.props.onPlay} />
      );

    let fullscreen = this.state.fullscreen ? (
      <FullscreenExit onClick={this.fullscreenexit} />
    ) : (
        <Fullscreen onClick={this.fullscreen} />
      );


    if (this.state.entered) {
      return (
        <div className="enter-screen">
          <video
            // controls
            className="zizi-intro-video"
            onEnded={this.props.onEnter}
            ref={this.video}
            playsInline={true}
            autoPlay={true}
          >
            <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/intro/playlist.m3u8" />
          </video>


          <div className="controls">
          {playPause}
            <Back10 onClick={this.props.onBack10} />
            <Forward10 onClick={this.props.onForward10} />
            {fullscreen}
          </div>

          <button onClick={this.props.onEnter}>
            Skip Intro <FastForwardRounded fontSize="inherit" />
          </button>
        </div>
      );
    }

    return (
      <div className="enter-screen">
        <a className="enter" onClick={this.attemptLogin}>
          <img src="img/enterButton.png" />
        </a>
        <form onSubmit={this.attemptLogin}>
          <input
            className="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePassword}
            placeholder="Password"

          />
        </form>
        <p className="password"><b>BETA version</b><br></br>Works best in Chrome (desktop). <br></br>Known bugs on mobile.</p>

        <Curtain />
      </div>
    );
  }

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
