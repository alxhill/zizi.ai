import React from "react";
import { Play, Pause, ZoomIn, ZoomOut, Show, Hide, PrevAct, NextAct } from "./Buttons";
import DragPlayer from "./DragPlayer";
import HiddenYoutubePlayer from "./HiddenYoutubePlayer";
import Curtain from "./Curtain";

class ZiziPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      playing: false,
      zoom: false,
      pose: false,
      currentTime: 0,
      act: "roses",
      performer: "me",
    };
  }

  render() {
    let playerButtons = !this.state.isLoaded || (
      <div className="player-buttons">
        <Play onClick={this.play} />
        <Pause onClick={this.pause} />
      </div>
    );

    return (
      <div>
        <Curtain zoom={this.state.zoom}/>
        <HiddenYoutubePlayer
          act={this.state.act}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={false}
          adjustedTimerEvent={this.onTimerEvent}
        />
        <div className="button-group">
        {playerButtons}
          <div className="zoom-buttons">
            <ZoomOut onClick={this.zoomOut}/>
            <ZoomIn onClick={this.zoomIn}/>
          </div>
          <div className="pose-buttons">
            <Hide onClick={this.enablePose}/>
            <Show onClick={this.disablePose}/>
          </div>
          <div className="act-buttons">
            <PrevAct onClick={this.prevAct}/>
            <NextAct onClick={this.nextAct}/>
          </div>
        </div>
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
    this.setState({zoom: true})
  }

  zoomOut = () => {
    this.setState({zoom: false})
  }

  enablePose = () => {
    this.setState({pose: true})
  }

  disablePose = () => {
    this.setState({pose: false})
  }
}

export default ZiziPlayer;
