import React from "react";
import { Play, Pause } from "./Buttons";
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
    let buttons = !this.state.isLoaded || (
      <div className="buttons">
        <Play onClick={this.play} />
        <Pause onClick={this.pause} />
      </div>
    );

    return (
      <div>
        <Curtain zoom={this.props.zoom}/>
        <HiddenYoutubePlayer
          act={this.state.act}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={false}
          adjustedTimerEvent={this.onTimerEvent}
        />
        {buttons}
        <DragPlayer
          className="primary-player"
          act={this.state.act}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          shadow={false}
        />
        <DragPlayer
          className="shadow-player"
          act={this.state.act}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
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
}

export default ZiziPlayer;
