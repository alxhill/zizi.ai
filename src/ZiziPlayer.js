import React from "react";
import DragPlayer from "./video/DragPlayer";
import HiddenYoutubePlayer from "./video/HiddenYoutubePlayer";
import Curtain from "./Curtain";
import ZiziSidebar from "./sidebar/ZiziSidebar";

export default class ZiziPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      playing: false,
      zoom: false,
      currentTime: 0,
      song: this.props.showData.songs[this.props.song],
      performer: this.props.showData.performers[this.props.startingPerformer],
    };
  }

  render() {
    return (
      <div>
        <HiddenYoutubePlayer
          song={this.state.song}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={true}
          adjustedTimerEvent={this.onTimerEvent}
        />
        <ZiziSidebar
          showData={this.props.showData}
          song={this.state.song}
          performer={this.state.performer}
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
          newPerformer={this.newPerformer}
          switchToPicker={this.props.switchToPicker}
        />
        <DragPlayer
          className="primary-player"
          song={this.state.song}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          zoom={this.state.zoom}
          onEnded={this.props.switchToPicker}
        />
        <Curtain zoom={this.state.zoom} />
      </div>
    );
  }

  youtubeReady = () => {
    this.setState({ isLoaded: true, playing: true });
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
      song: this.props.showData.songs[songName],
      // start: this.props.showData.youtube.startTime[0.0]
    });
  };

  changePerformer = (performerName) => {
    this.setState({
      performer: this.props.showData.performers[performerName],
    });
  };

  newPerformer = () => {
    var keys = Object.keys(this.props.showData.performers);
    var random = keys[(keys.length * Math.random()) << 0];
      // avoid edge case of randomising to the current performer
    while (random === this.state.performer) {
      random = keys[(keys.length * Math.random()) << 0];
    }
    this.setState({
      performer: this.props.showData.performers[random],
    });
  };
}
