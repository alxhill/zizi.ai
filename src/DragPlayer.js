import React from "react";
import Hls from "hls.js";

class DragPlayer extends React.Component {
  static defaultProps = {
    zoom: false,
    pose: false,
    shadow: false,
    playing: false,
  };

  constructor(props) {
    super(props);
    this.dragVideo = React.createRef();
  }

  render() {
    let zoomClass = this.props.zoom ? "zoom" : "full"
    return (
      <div className="vidWindow">
      <video
        autoPlay={this.props.playing}
        className={this.props.className + " drag-video " + zoomClass}
        playsInline={true}
        muted={true}
        ref={this.dragVideo}
      >
        <source src={this.renderUrl(this.props)} />
      </video>
      </div>
    );
  }

  componentDidMount() {
    this.dragVideo.current.currentTime = this.props.currentTime;
    this.handleHls()
  }

  componentDidUpdate(prevProps) {
    let player = this.dragVideo.current;
    if (prevProps.playing && !this.props.playing) {
      player.pause();
    } else if (!prevProps.playing && this.props.playing) {
      player.play();
    }

    if (this.props.playing) {
      this.sync(this.props.currentTime);
    }

    if (this.renderUrl(prevProps) !== this.renderUrl(this.props)) {
      player.load();
      player.currentTime = this.props.currentTime;
      this.handleHls()
    }
  }

  sync(newTime) {
    if (Math.abs(newTime - this.dragVideo.current.currentTime) > 0.3) {
      console.log("UPDATING TIME", this.dragVideo.current.currentTime, newTime);
      this.dragVideo.current.currentTime = newTime;
    }
  }

  renderUrl(props) {
    return props.shadow
      ? this.renderShadowUrl(props)
      : this.renderActUrl(props);
  }

  renderActUrl(props) {
    let ziziString = props.pose ? "pose" : props.performer.id;
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-${ziziString}/playlist.m3u8`;
  }

  renderShadowUrl(props) {
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-shadow/playlist.m3u8`;
  }

  handleHls() {
    if (Hls.isSupported() && !this.dragVideo.current.canPlayType('application/vnd.apple.mpegurl')) {
      var hls = new Hls();
      hls.loadSource(this.renderUrl(this.props));
      hls.attachMedia(this.dragVideo.current);
    }
  }
}

export default DragPlayer;
