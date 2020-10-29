import React from "react";

export default class SongPlayer extends React.Component {
  static defaultProps = {
    playing: false,
    onReady: () => {},
    adjustedTimerEvent: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, timer: 0 };

    this.audioPlayer = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing && !this.props.playing) {
      this.pause();
    } else if (!prevProps.playing && this.props.playing) {
      this.play();
    }
  }

  render() {
    return (
      <div style={{ display: "none" }}>
        <audio
          autoPlay={true}
          src="https://s3-eu-west-1.amazonaws.com/zizi.ai/songs/glass.m4a"
          onCanPlay={this.onReady}
          ref={this.audioPlayer}
        ></audio>
      </div>
    );
  }

  play() {
    this.audioPlayer.current.play();
    this.timerIntervalId = setInterval(this.updateTimer, 1000);
  }

  pause() {
    this.audioPlayer.current.pause();
    clearInterval(this.timerIntervalId);
  }

  updateTimer = () => {
    let currentTime = this.audioPlayer.current.currentTime;

    this.setState({ timer: currentTime });
    this.props.adjustedTimerEvent(currentTime);
  };

  onReady = () => {
    this.props.onReady();
    this.props.timerDelegate.onTimeChanged((shift) => {
      this.audioPlayer.current.currentTime += shift;
    });
  };
}
