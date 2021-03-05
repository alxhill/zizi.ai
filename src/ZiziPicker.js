import React from "react";
import PropTypes from "prop-types";
import Hls from "hls.js";
import Performers from "./sidebar/Performers";
import Songs from "./sidebar/Songs";
import { sideCurtain, backCurtain } from "./Curtain";
import { withRouter } from "react-router-dom";

class ZiziPicker extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };


  constructor(props) {
    super(props);
    this.state = {
      mode: {
        type: "performer",
        content: "thumbnails",
      },
      chosenPerformer: null,
      chosenSong: null,
      src: this.getSrc(this.props.match.params.source),
      startVisibility: 'visible',
      loopVisibility: 'hidden',
      endVisibility: 'hidden',
      sidebarVisible: 'open',
    };

    this.startvideo = React.createRef();
    this.loopvideo = React.createRef();
    this.audioloop = React.createRef();
  }

  componentDidMount() {
    this.handleHls(this.startvideo.current);
    this.handleHls(this.loopvideo.current);
    // this.handleHls(this.endvideo.current);
    // setTimeout(
    //   () => this.handleHls(this.loopvideo.current),
    //   1500);
    // setTimeout(
    //   () => this.handleHls(this.endvideo.current),
    //   1000);
    document.addEventListener("visibilitychange", this.onVisibilityChange, false);
  }

  componentWillUnmount() {
    document.removeEventListener("visibilitychange", this.onVisibilityChange)
  }

  onVisibilityChange = () => {
    console.log("visibilitychange", this.audioloop, document.hidden, this)
    if (document.hidden) {
      this.audioloop.current.pause();
      console.log("INACTIVE - HOST");
    } else {
      this.audioloop.current.play()
      console.log("RESUME - HOST");
    }
  }

  getSrc(source) {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (source) {
      default:
      case "enter":
        return "https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host-0";
      // local
      // return "vids/intro-and-host/host-intro/high.m3u8";
      case "song-end":
        return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host-${num}`;
      // local
      // return `vids/intro-and-host/host${num}/high.m3u8`;
    }
  }

  render() {
    return (
      <div className="picker fullheight">
        {backCurtain(false)}
        {sideCurtain(false)}

        <video
          className={"host-video " + this.state.startVisibility}
          onEnded={this.showLoop}
          autoPlay={true}
          ref={this.startvideo}
          playsInline={true}>
          <source src={this.state.src + "-start/playlist.m3u8"} />
        </video>
        <video
          className={"host-video " + this.state.loopVisibility}
          preload="metadata"
          loop={true}
          ref={this.loopvideo}
          playsInline={true}>
          <source src={this.state.src + "-loop/playlist.m3u8"} />
        </video>
        <audio
          className="sound-loop"
          autoPlay={true}
          loop={true}
          ref={this.audioloop}
          controls={false}
          src="bgloop.mp3"
        ></audio>
        <div className={"secondary-sidebar zizi-picker-bar " + this.state.sidebarVisible}>
          <div className="close-sidebar-left"></div>
          <div className="content-sidebar">
            {this.renderContent(this.state.mode)}
          </div>
        </div>
        <button className="pickerAboutButton" onClick={this.showAbout}>
          About
        </button>
      </div>
    );
  }

  renderContent(mode) {
    switch (mode.type) {
      default:
      case "performer":
        return (
          <Performers
            mode="pick"
            changePerformer={this.setPerformer}
            performers={this.props.showData.performers}
            content={this.state.mode.content}
            showAboutView={this.showAboutView}
            showThumbnails={this.showThumbnails}
          />
        );
      case "song":
        return (
          <Songs
            songs={this.props.showData.songs}
            performers={this.props.showData.performers}
            changeSong={this.setSong}
          />
        );
    }
  }


  showAbout = () => {
    this.props.history.push("/about")
  };

  showAboutView = (performer) => {
    this.setState({
      mode: { type: "performer", content: performer },
    });
  };

  showThumbnails = () => {
    this.setState({
      mode: { type: "performer", content: "thumbnails" },
    });
  };

  setPerformer = (performer) => {
    this.setState({
      mode: { type: "song" },
      chosenPerformer: performer,
    });
  };

  setSong = (song) => {
    this.props.history.push(this.props.generateZiziUrl(this.state.chosenPerformer, song));
    console.log('switching to song + performer:', song, this.state.chosenPerformer);
    // eslint-disable-next-line no-undef
    gtag('event', 'song_' + song)
    // eslint-disable-next-line no-undef
    gtag('event', 'perf_' + this.state.chosenPerformer + '_init')
  };

  showLoop = () => {
    // this.setState({ startVisibility: 'hidden' });
    this.setState({ loopVisibility: 'visible', endVisibility: 'hidden' });
    this.loopvideo.current.play();
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


export default withRouter(ZiziPicker);