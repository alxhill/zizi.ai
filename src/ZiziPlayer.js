import React from "react";
import DragPlayer from "./media/DragPlayer";
import Curtain from "./Curtain";
import ZiziSidebar from "./sidebar/ZiziSidebar";
import SongPlayer from "./media/SongPlayer";

class YoutubeTimerDelegate {
  shiftTime(shift) {
    if (this.callback != null) {
      this.callback(shift);
    }
  }

  onTimeChanged(callback) {
    this.callback = callback;
  }
}

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
      ziziVideoLoaded: true,
    };

    this.timerDelegate = new YoutubeTimerDelegate();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  };

  render() {
    return (
      <div>
        <SongPlayer
          song={this.state.song}
          onReady={this.songReady}
          playing={this.state.playing}
          adjustedTimerEvent={this.onTimerEvent}
          timerDelegate={this.timerDelegate}
          pause={this.pause}
        />
        {/* <HiddenYoutubePlayer
          song={this.state.song}
          onReady={this.youtubeReady}
          playing={this.state.playing}
          hideTimer={true}
          adjustedTimerEvent={this.onTimerEvent}
          timerDelegate={this.timerDelegate}
        /> */}
        <ZiziSidebar
          showData={this.props.showData}
          song={this.state.song}
          performer={this.state.performer}
          playing={this.state.playing}
          zoom={this.state.zoom}
          onPlay={this.play}
          onPause={this.pause}
          onForward10={() => this.shiftTime(10)}
          onBack10={() => this.shiftTime(-10)}
          onZoomOut={this.zoomOut}
          onZoomIn={this.zoomIn}
          onEnablePose={this.enablePose}
          onDisablePose={this.disablePose}
          changeSong={this.changeSong}
          changePerformer={this.changePerformer}
          newPerformer={this.newPerformer}
          switchToPicker={this.props.switchToPicker}
          switchToAbout={this.props.switchToAbout}
          ziziVideoLoaded={this.state.ziziVideoLoaded}
        />
        <DragPlayer
          className="primary-player"
          song={this.state.song}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          zoom={this.state.zoom}
          onEnded={this.props.switchToPicker}
          onVideoLoaded={this.onVideoLoaded}
          play={this.play}
        />
        <audio
          className="sound-loop"
          autoPlay={true}
          loop={false}
          ref={this.audioloop}
          controls={false}
          src="bgloop-fade.mp3"
        ></audio>
        <Curtain zoom={this.state.zoom} />
      </div>
    );
  }

  songReady = () => {
    this.setState({ isLoaded: true, playing: true })
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

  onVideoLoaded = () => {
    this.setState({ ziziVideoLoaded: true });
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
      ziziVideoLoaded: false,
    });
  };

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37 || 39:
        // Arrow left or right - newPerformer
        // this.newPerformer; 
        break;
      case 32:
        // space - pause/play
        // if(playing){
        //   this.pause;
        // } else {
        //   this.play;
        // }
        break;
      case 13:
        // enter - zoom in
        // this.setState({ zoom: !zoom });
        break;
      case 27:
        // esc - not fullscreen
        console.log("ESC");
        break;
      case 70:
        // 'f' - fullscreen
        break;
      default:
        break;
    }
  };

  shiftTime = (shift) => {
    this.timerDelegate.shiftTime(shift);
    this.setState({ currentTime: this.state.currentTime + shift });
  };
}
