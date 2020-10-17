import React from "react";
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
    };
  }

  render() {
    return (
      <div>
        <SecondaryBar openClose={true}>
          {this.renderContent(this.state.mode)}
        </SecondaryBar>
        <video className="intro-video" onEnded={this.props.onEnter} autoPlay={true}>
          <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/intro-and-host/host-intro/playlist.m3u8"/>
        </video>
        <Curtain fade/>
      </div>
    );
  }

  // behaviour - if come fromIntroScreen play host-intro/playlist.m3u8 otherwise play host1, host2, or host3/playlist.m3u8 at random
  // num = Math.floor(Math.random() * 3)+1;
  // <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/intro-and-host/intro${num}/playlist.m3u8"/>


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
}
