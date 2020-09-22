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
      act: "glass",
      performer: "lilly",
    };
  }

  render() {
    return (
      <div>
        <Curtain zoom={this.state.zoom} />
        <HiddenYoutubePlayer
          act={this.state.act}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={false}
          adjustedTimerEvent={this.onTimerEvent}
        />
        <ZiziSidebar
          isLoaded={this.state.isLoaded}
          playing={this.state.playing}
          zoom={this.state.zoom}
          onPlay={this.play}
          onPause={this.pause}
          onZoomOut={this.zoomOut}
          onZoomIn={this.zoomIn}
          onEnablePose={this.enablePose}
          onDisablePose={this.disablePose}
        />
        <DragPlayer
          className="primary-player"
          act={this.state.act}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          zoom={this.state.zoom}
          pose={this.state.pose}
          shadow={false}
        />
        <DragPlayer
          className="shadow-player"
          act={this.state.act}
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
}
