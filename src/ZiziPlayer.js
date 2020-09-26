import React from "react";
import DragPlayer from "./DragPlayer";
import HiddenYoutubePlayer from "./HiddenYoutubePlayer";
import Curtain from "./Curtain";
import ZiziSidebar from "./ZiziSidebar";

export default class ZiziPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      playing: false,
      zoom: false,
      pose: false,
      currentTime: 0,
      song: this.props.showData.songs["iam"],
      performer: this.props.showData.performers["amalgam"],
    };
  }

  render() {
    return (
      <div>
        <HiddenYoutubePlayer
          song={this.state.song}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={false}
          adjustedTimerEvent={this.onTimerEvent}
        />
        <ZiziSidebar
          showData={this.props.howData}
          isLoaded={this.state.isLoaded}
          playing={this.state.playing}
          zoom={this.state.zoom}
          onPlay={this.play}
          onPause={this.pause}
          onZoomOut={this.zoomOut}
          onZoomIn={this.zoomIn}
          onEnablePose={this.enablePose}
          onDisablePose={this.disablePose}
          changeSong={this.changeSong}
          changePerformer={this.changePerformer}
        />

        <Curtain zoom={this.state.zoom} type="side" />
        <Curtain zoom={this.state.zoom} type="bg" />
        <DragPlayer
          className="primary-player"
          song={this.state.song}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          zoom={this.state.zoom}
          pose={this.state.pose}
          shadow={false}
        />
        <DragPlayer
          className="shadow-player"
          song={this.state.song}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          zoom={this.state.zoom}
          pose={this.state.pose}
          shadow={true}
        />
      </div>
    );
  }

  youtubeReady = () => {
    this.setState({ isLoaded: true });
  };

  play = () => {
    if (!this.state.isLoaded) {
      return;
    }
    this.setState({ playing: true });
  };

  pause = () => {
    if (!this.state.isLoaded) {
      return;
    }
    this.setState({ playing: false });
  };

  onTimerEvent = (currentTime) => {
    this.setState({ currentTime: currentTime });
  };

  zoomIn = () => {
    this.setState({ zoom: true });
  };

  zoomOut = () => {
    this.setState({ zoom: false });
  };

  enablePose = () => {
    this.setState({ pose: true });
  };

  disablePose = () => {
    this.setState({ pose: false });
  };

  changeSong = (songName) => {
    this.setState({
      song: this.props.showData.songs[songName]
    })
  }

  changePerformer = (performerName) => {
    this.setState({
      performer: this.props.showData.performers[performerName]
    })
  }
}
