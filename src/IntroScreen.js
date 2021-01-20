import { Portrait, SkipNextRounded } from "@material-ui/icons";
import React from "react";
import { sideCurtain } from "./Curtain";
import YouTube from "react-youtube";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false,
      password: "",
      currentTime: 0,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.yt = this.player
  }

  externalLink(ref, content) {
    return <a target='_blank' rel="noopener noreferrer" href={ref}>{content}</a>;
  }

  render() {
    const playerOpts = {
      playerVars: {
        autoplay: 1,
        autohide: 0,
        playsinline: 0,
        start: 0,
        frameborder: 0,
        controls: 1,
        rel: 0,
        showinfo: 0,
        fs: 1,
        modestbranding: 1,
      },
    };

    let vidId;
    if (this.state.width > this.state.height) {
      // Landscape
      vidId = "Tzbm-cedKls"
    } else {
      // Portrait
      vidId = "sn9w8ECVT1k"
    }

    if (this.state.entered) {
      return (
        <div className="enter-screen">

          <YouTube className="zizi-intro-video" videoId={vidId} opts={playerOpts} onReady={this._onReady} onEnd={this.props.onEnter} onError={this.props.onEnter} />

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

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _onReady(event) {
    event.target.playVideo();
  }
}
