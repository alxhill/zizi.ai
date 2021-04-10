import React from "react";
import DragPlayer from "./media/DragPlayer";
import ZiziSidebar from "./sidebar/ZiziSidebar";
import SongPlayer from "./media/SongPlayer";
// import HiddenYoutubePlayer from "./media/HiddenYoutubePlayer";
import { withRouter } from "react-router-dom";

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

class ZiziPlayer extends React.Component {
  constructor(props) {
    super(props);
    let searchParams = new URLSearchParams(this.props.location.search);
    let zoomRandom = Math.random() > 0.5 ? true : false;  
    this.state = {
      isLoaded: false,
      playing: false,
      zoom: zoomRandom,
      currentTime: 0,
      song: this.props.showData.songs[searchParams.get("song")],
      performer: this.props.showData.performers[searchParams.get("performer")],
      ziziVideoLoaded: true,
    };

    this.timerDelegate = new YoutubeTimerDelegate();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener(
      "visibilitychange",
      this.onVisibilityChange,
      false
    );
  }

  componentWillUnmount() {
    document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }

  onVisibilityChange = () => {
    console.log("visibilitychange", document.hidden, this);
    if (document.hidden) {
      this.pause();
      console.log("INACTIVE - SONG");
    }
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
        {/* Can switch between now
        <HiddenYoutubePlayer
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
          switchToPicker={this.switchToPicker}
          switchToAbout={this.switchToAbout}
          ziziVideoLoaded={this.state.ziziVideoLoaded}
        />
        <DragPlayer
          className="primary-player"
          song={this.state.song}
          performer={this.state.performer}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          zoom={this.state.zoom}
          onEnded={this.switchToPicker}
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
      </div>
    );
  }

  songReady = () => {
    this.setState({ isLoaded: true, playing: true });
  };

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
    // eslint-disable-next-line no-undef
    gtag("event", "zoomIn");
    console.log("zoom in", this.state.currentTime);
  };

  zoomOut = () => {
    this.setState({ zoom: false });
    // eslint-disable-next-line no-undef
    gtag("event", "zoomOut");
    console.log("zoom out", this.state.currentTime);
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
    });
    this.props.history.push(
      this.props.generateZiziUrl(this.state.performer.id, songName)
    );
  };

  changePerformer = (performerName) => {
    this.setState({
      performer: this.props.showData.performers[performerName],
    });
    // eslint-disable-next-line no-undef
    gtag("event", "perf_" + performerName);
    console.log(performerName, this.state.currentTime);
    this.props.history.push(
      this.props.generateZiziUrl(performerName, this.state.song.id)
    );
  };

  newPerformer = () => {
    let keys = Object.keys(this.props.showData.performers);
    var randomPerformer = keys[(keys.length * Math.random()) << 0];
    // avoid edge case of randomising to the current performer
    while (randomPerformer === this.state.performer.id) {
      randomPerformer = keys[(keys.length * Math.random()) << 0];
    }
    this.setState({
      ziziVideoLoaded: false,
      performer: this.props.showData.performers[randomPerformer],
    });
    this.props.history.push(
      this.props.generateZiziUrl(randomPerformer, this.state.song.id)
    );
    // eslint-disable-next-line no-undef
    gtag("event", "perf_shuffle");
    console.log(randomPerformer, "qc", this.state.currentTime);
  };

  switchToPicker = () => {
    this.props.history.push("/picker/song-end");
  };

  switchToAbout = () => {
    this.props.history.push("/about");
  };

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 38:
        // Arrow up or down - newPerformer
        this.newPerformer();
        break;
      case 40:
        // Arrow up or down - newPerformer
        this.newPerformer();
        break;
      case 37:
        // Arrow left or right - skip
        this.shiftTime(-10);
        break;
      case 39:
        // Arrow left or right - skip
        this.shiftTime(10);
        break;
      case 32:
        // space - pause/play
        if (this.state.playing) {
          this.pause();
        } else {
          this.play();
        }
        break;
      case 13:
        // enter - zoom in
        if (this.state.zoom) {
          this.zoomOut();
        } else {
          this.zoomIn();
        }
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

export default withRouter(ZiziPlayer);
