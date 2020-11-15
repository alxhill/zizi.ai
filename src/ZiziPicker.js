import React from "react";
import Hls from "hls.js";
import Curtain from "./Curtain";
import Performers from "./sidebar/Performers";
import SecondaryBar from "./sidebar/SecondaryBar";
import Songs from "./sidebar/Songs";

export default class ZiziPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: {
        type: "performer",
        content: "thumbnails",
      },
      chosenPerformer: null,
      chosenSong: null,
      src: this.getSrc(this.props.source),
      startVisibility: 'visible',
      loopVisibility: 'hidden',
      endVisibility: 'hidden',
      sidebarVisible: true,
    };

    this.startvideo = React.createRef();
    this.loopvideo = React.createRef();
    this.endvideo = React.createRef();
    this.audioloop = React.createRef();
  }

  componentDidMount() {
    this.handleHls(this.startvideo.current);
    setTimeout(
      () => this.handleHls(this.loopvideo.current),
      1500);
    setTimeout(
      () => this.handleHls(this.endvideo.current),
      1000);


    // https://stackoverflow.com/questions/14414654/stop-html5-audio-from-looping-when-ios-safari-is-closed
    var lastSeen;
    var loop = function () {
      lastSeen = Date.now();
      setTimeout(loop, 50);
    };
    loop();

    this.audioloop.current.addEventListener('timeupdate', function () {
      if (Date.now() - lastSeen > 100) {
        this.pause();
        console.log("INACTIVE -HOST");
      }
    }, false);
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
      <div>
        <SecondaryBar openClose={this.state.sidebarVisible} className={"zizi-picker-bar"}>
          {this.renderContent(this.state.mode)}
        </SecondaryBar>
        <button className="pickerAboutButton" onClick={this.showAbout}>
          About
          </button>
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
        <video
          className={"host-video " + this.state.endVisibility + " fade"}
          onEnded={this.enterPlayer}
          preload="metadata"
          loop={false}
          ref={this.endvideo}
          playsInline={true}>
          <source src={this.state.src + "-end/playlist.m3u8"} />
        </video>
        <audio
          className="sound-loop"
          autoPlay={true}
          loop={true}
          ref={this.audioloop}
          controls={false}
          src="bgloop.mp3"
        ></audio>
        <Curtain fade />
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
    this.props.switchToAbout(null, null);
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
    this.setState({
      chosenSong: song,
    });
    this.showEnd();
  };

  enterPlayer = () => {
    this.props.switchToPlayer(this.state.chosenPerformer, this.state.chosenSong);
  };

  showLoop = () => {
    // this.setState({ startVisibility: 'hidden' });
    this.setState({ loopVisibility: 'visible' });
    this.setState({ endVisibility: 'hidden' });
    this.loopvideo.current.play();
  };

  showEnd = () => {
    // this.setState({ startVisibility: 'hidden fade' });
    // this.setState({ loopVisibility: 'hidden fade' });
    this.setState({ endVisibility: 'visible' });
    this.setState({ sidebarVisible: false });
    this.endvideo.current.play();
    this.loopvideo.current.pause();
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


