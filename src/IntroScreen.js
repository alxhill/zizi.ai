import { SkipNextRounded } from "@material-ui/icons";
import React from "react";
import { sideCurtain } from "./Curtain";
import YouTube from "react-youtube";
import { Link, withRouter } from "react-router-dom";

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      entered: false,
      password: "",
      email: "",
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
        modestbranding: 0,
      },
    };

    let vidId;
    if (this.state.width > this.state.height) {
      // Landscape
      vidId = "Tlhe3BTdG7A"
    } else {
      // Portrait
      vidId = "H9lw_XwP3M8"
    }

    if (this.state.entered) {
      return (
        <div className="enter-screen">

          <YouTube className="zizi-intro-video" videoId={vidId} opts={playerOpts} onReady={this._onReady} onEnd={this.onVideoEnd} onError={this.onVideoEnd} />

          <div className="controls">
            <Link to="/picker/enter">
                <button className="skip-intro">
                Skip Intro 
                <SkipNextRounded fontSize="inherit" />
              </button>
            </Link>
          </div>
        </div >
      );
    }

    let animateClass = this.state.animate ? "animate" : "";
    return (
      <div className="enter-screen">
        <img
          src={"img/curtain-intro.jpg"}
          className="curtain-bg "
          draggable={false}
          alt=""
        />
        {sideCurtain(false)}

        <button type="button" className="enter" onClick={this.enter}>
          <img className={animateClass} src="img/enterButtonFull.png" alt="Enter the Zizi show" />
        </button>
        <div className={"black-overlay " + animateClass}></div>


        <form className="intro-text" onSubmit={this.attemptLogin}>


          <span>
              <p className="credit">Created by {this.externalLink("https://www.jakeelwes.com/", "Jake Elwes")}{' '}
                with 13 of the UK's top drag artists.
                </p>
                <p className="credit">
                  <i>For best performance use Chrome on desktop.</i>
                </p>
                </span>
        </form>

        <small className="info">
                        <p>
                Requires a fast internet connection <br />
                Not optimised for android devices <br />
                Copyright © Jake Elwes 2020
            </p>
              <p>
              The Zizi Show 2020 is part of {this.externalLink("https://newreal.cc/", "The New Real")} by {this.externalLink("https://efi.ed.ac.uk/activity-and-partners/experiential-ai", "Edinburgh Futures Institute")}
              </p>



        </small>

      </div >
    );
  }


  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
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

  enter = (event) => {
    this.setState({ animate: true });
    setTimeout(
      () => this.setState({ entered: true }),
      1000);
  }

  attemptLogin = (event) => {
    if (event !== null) {
      event.preventDefault();
    }
    if (btoa(this.state.password) === "ZGVlcGZha2U=") {
      this.enter();
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

  onVideoEnd = (event) => {
    this.props.history.push("/picker/enter")
  }
}

export default withRouter(IntroScreen);