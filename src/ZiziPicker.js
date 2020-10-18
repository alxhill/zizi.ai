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
      src: this.getSrc(this.props.source),
    };

    this.video = React.createRef();
  }

  componentDidMount() {
    this.handleHls(this.video.current);
  }

  getSrc(source) {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (source) {
      default:
      case "enter":
        return "https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host-intro/playlist.m3u8";
      case "song-end":
        return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host${num}/playlist.m3u8`;
    }
  }

  render() {
    return (
      <div>
        <SecondaryBar openClose={true}>
          {this.renderContent(this.state.mode)}
        </SecondaryBar>
        <button className="pickerAboutButton" onClick={this.showAbout}>
            About
          </button>
        <video
          className="intro-video"
          onEnded={this.props.onEnter}
          autoPlay={true}
          ref={this.video}
          playsInline={true}>
          <source src={this.state.src} />
        </video>
        {/* <audio 
          autoPlay={true}

        ></audio> */}
        
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

  setSong = (chosenSong) => {
    this.props.switchToPlayer(this.state.chosenPerformer, chosenSong);
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
