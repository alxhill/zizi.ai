import React from "react";
import Hls from "hls.js";

class DragPlayer extends React.Component {
  static defaultProps = {
    zoom: false,
    shadow: false,
    playing: false,
  };

  constructor(props) {
    super(props);
    this.performerVideo = React.createRef();
    this.shadowVideo = React.createRef();
  }

  render() {
    return (
      <div>
        {this.renderPlayer("primary-player", this.performerVideo, this.performerSrc(this.props), this.props.onEnded)}
        {this.renderPlayer("shadow-player", this.shadowVideo, this.shadowSrc(this.props))}
      </div>
    );
  }

  renderPlayer(className, ref, src, onEnded) {
    let zoomClass = this.props.zoom ? "zoom" : "full";
    return (
      <span className={"video-frame " + className}>
        <video
          autoPlay={this.props.playing}
          className={"drag-video " + zoomClass}
          playsInline={true}
          muted={true}
          ref={ref}
          onEnded={onEnded}
        >
          <source src={src} />
        </video>
      </span>
    );
  }

  componentDidMount() {
    this.performerVideo.current.currentTime = this.props.currentTime;
    this.shadowVideo.current.currentTime = this.props.currentTime;
    this.handleHls(this.performerVideo.current, this.performerSrc(this.props));
    this.handleHls(this.shadowVideo.current, this.shadowSrc(this.props));
  }

  componentDidUpdate(prevProps) {
    let performer = this.performerVideo.current;
    let shadow = this.shadowVideo.current;

    if (prevProps.playing && !this.props.playing) {
      performer.pause();
      shadow.pause();
    } else if (!prevProps.playing && this.props.playing) {
      performer.play();
      shadow.play();
    }

    if (this.props.playing) {
      this.sync(this.props.currentTime);
    }

    if (this.performerSrc(prevProps) !== this.performerSrc(this.props)) {
      performer.load();
      performer.currentTime = this.props.currentTime;
      this.handleHls(performer, this.performerSrc(this.props));
    }

    if (this.shadowSrc(prevProps) !== this.shadowSrc(this.props)) {
      shadow.load();
      shadow.currentTime = this.props.currentTime;
      this.handleHls(shadow, this.shadowSrc(this.props));
    }
  }

  sync(newTime) {
    if (
      this.outOfSync(this.performerVideo.current, newTime) ||
      this.outOfSync(this.shadowVideo.current, newTime)
    ) {
      console.log(
        "UPDATING TIME",
        this.performerVideo.current.currentTime,
        this.shadowVideo.current.currentTime,
        newTime
      );
      this.performerVideo.current.currentTime = newTime;
      this.shadowVideo.current.currentTime = newTime;
    }
  }

  outOfSync(video, newTime) {
    return Math.abs(newTime - video.currentTime) > 0.2;
  }

  performerSrc(props) {
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-${props.performer.id}/playlist.m3u8`;
  }

  shadowSrc(props) {
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-shadow/playlist.m3u8`;
  }

  handleHls(video, url) {
    if (
      Hls.isSupported() &&
      !video.canPlayType("application/vnd.apple.mpegurl")
    ) {
      var hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    }
  }
}

export default DragPlayer;
