import React from "react";
import { Play, Pause } from "./Buttons";
import DragPlayer from "./DragPlayer";
import HiddenYoutubePlayer from "./HiddenYoutubePlayer";

class ZiziPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      playing: false,
      act: "roses",
      currentTime: 0,
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
        <HiddenYoutubePlayer
          act={this.state.act}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={false}
          adjustedTimerEvent={this.onTimerEvent}
        />
        {buttons}
        <DragPlayer
          playing={this.state.playing}
          currenTime={this.state.currentTime}
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
