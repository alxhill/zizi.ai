import React from "react";
import DragPlayer from "./media/DragPlayer";
import Hls from "hls.js";
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
      visibility: 'visible',
      src: this.getSrc(),
    };

    this.timerDelegate = new YoutubeTimerDelegate();
    this.hostEndingVideo = React.createRef();
    this.audio = React.createRef();
  }


  componentDidMount() {
    this.handleHls(this.hostEndingVideo.current);
    // https://stackoverflow.com/questions/14414654/stop-html5-audio-from-looping-when-ios-safari-is-closed
    // var lastSeen;
    // var loop = function () {
    //   lastSeen = Date.now();
    //   setTimeout(loop, 50);
    // };
    // loop();

    // this.audio.current.addEventListener('timeupdate', function () {
    //   if (Date.now() - lastSeen > 100) {
    //     this.pause();
    //     console.log("INACTIVE -HOST");
    //   }
    // }, false);
  }

  render() {
    return (
      <div>
        <SongPlayer
        song={this.state.song}
        onReady={this.songReady}
        playing={this.state.playing}
        adjustedTimerEvent={this.onTimerEvent}
        timerDelegate={this.timerDelegate}
        ref={this.audio}
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
        />
        <video
          className={"host-video " + this.state.visibility}
          onEnded={this.hideHost}
          autoPlay={true}
          ref={this.hostEndingVideo}
          playsInline={true}>
          <source src={this.state.src} />
        </video>
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

  shiftTime = (shift) => {
    this.timerDelegate.shiftTime(shift);
    this.setState({ currentTime: this.state.currentTime + shift });
  };

  getSrc() {
    let num = Math.floor(Math.random() * 4);
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/intro-and-host/host-${num}-end/playlist.m3u8`;
  };

  hideHost = () => {
    this.setState({visibility: 'hidden'});
  }

  handleHls(video) {
    if (
      Hls.isSupported() &&
      !video.canPlayType("application/vnd.apple.mpegurl")
    ) {
      var hls = new Hls();
      hls.loadSource(video.querySelector("source").src);
      hls.attachMedia(video);
    }
  }
}
