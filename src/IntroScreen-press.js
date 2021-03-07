import { Portrait, SkipNextRounded } from "@material-ui/icons";
import React from "react";
import { sideCurtain } from "./Curtain";
import YouTube from "react-youtube";

export default class IntroScreen extends React.Component {
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
        modestbranding: 1,
      },m
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

        <button type="button" className="enter" onClick={this.attemptLogin}>
          <img className={animateClass} src="img/enterButtonFull.png" alt="Enter the Zizi show" />
        </button>
        <div className={"black-overlay " + animateClass}></div>


        <form className="intro-text" onSubmit={this.attemptLogin}>


          <p className="subtitle2"><i>A deepfake drag cabaret - Preview</i></p>

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePassword}
            placeholder="password"
          />
          <p>

            <small><p>Created by {this.externalLink("https://www.jakeelwes.com/", "Jake Elwes")}{' '}
                in Collaboration with 13 of the UK's top drag artists
                <br />
                The Zizi Show 2020 is part of {this.externalLink("https://newreal.cc/", "The New Real")} by {this.externalLink("https://efi.ed.ac.uk/activity-and-partners/experiential-ai", "Edinburgh Futures Institute")}
              </p>
              </small>
          </p>

          <div id="mc_embed_signup">
            <form
              onSubmit="null" action="https://zizi.us10.list-manage.com/subscribe/post?u=ee24af4926f5f371f6fe5a0c8&amp;id=b14dd06991" method="POST" novalidate>
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  value={this.state.email}
                  name="EMAIL"
                  className="email"
                  onChange={this.updateEmail}
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text"
                    name="b_ee24af4926f5f371f6fe5a0c8_b14dd06991" tabindex="-1" value="" />
                </div>
                <div className="clear" />
                <input type="submit" value="subscribe for news" name="subscribe"
                  id="mc-embedded-subscribe" className="button" />
              </div>
            </form>
          </div>

          <p>
            <small>

              <p>
                Requires a fast internet connection <br />
                Not optimised for android devices <br />
                Copyright © Jake Elwes 2020
            </p>

            </small>
          </p>


        </form>
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
    // this.setState({ entered: true });
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
}
