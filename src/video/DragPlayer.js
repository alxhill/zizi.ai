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
    this.poseVideo = React.createRef();
  }

  render() {
    return (
      <div>
        {this.renderPlayer("primary-player", this.performerVideo, this.performerSrc(this.props), this.props.onEnded)}
        {this.renderPlayer("shadow-player", this.shadowVideo, this.shadowSrc(this.props))}
        {this.renderPlayer("pose-player", this.poseVideo, this.poseSrc(this.props))}
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
    this.poseVideo.current.currentTime = this.props.currentTime;
    this.handleHls(this.performerVideo.current);
    this.handleHls(this.shadowVideo.current);
    this.handleHls(this.poseVideo.current);
  }

  componentDidUpdate(prevProps) {
    let performer = this.performerVideo.current;
    let shadow = this.shadowVideo.current;
    let pose = this.poseVideo.current;

    if (prevProps.playing && !this.props.playing) {
      performer.pause();
      shadow.pause();
      pose.pause();
    } else if (!prevProps.playing && this.props.playing) {
      performer.play();
      shadow.play();
      pose.play();
    }

    if (this.props.playing) {
      this.sync(this.props.currentTime);
    }

    if (this.performerSrc(prevProps) !== this.performerSrc(this.props)) {
      this.reload(performer)
    }

    if (this.shadowSrc(prevProps) !== this.shadowSrc(this.props)) {
      this.reload(shadow)
    }
    if (this.poseSrc(prevProps) !== this.poseSrc(this.props)) {
      this.reload(pose)
    }
  }

  sync(newTime) {
    if (
      this.outOfSync(this.performerVideo.current, newTime) ||
      this.outOfSync(this.shadowVideo.current, newTime) ||
      this.outOfSync(this.poseVideo.current, newTime)
    ) {
      console.log(
        "UPDATING TIME",
        this.performerVideo.current.currentTime,
        this.shadowVideo.current.currentTime,
        this.poseVideo.current.currentTime,
        newTime
      );
      this.performerVideo.current.currentTime = newTime;
      this.shadowVideo.current.currentTime = newTime;
      this.poseVideo.current.currentTime = newTime;
    }
  }

  outOfSync(video, newTime) {
    return Math.abs(newTime - video.currentTime) > 0.2;
  }

  reload(video) {
    video.load();
    video.currentTime = this.props.currentTime;
    this.handleHls(video);
  }

  performerSrc(props) {
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-${props.performer.id}/playlist.m3u8`;
    // local
    // return `vids/web/${props.song.id}-${props.performer.id}/high.m3u8`;
  }

  shadowSrc(props) {
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-shadow/playlist.m3u8`;
    // local
    // return `vids/web/${props.song.id}-shadow/high.m3u8`;
  }

  poseSrc(props) {
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vid/${props.song.id}-pose/playlist.m3u8`;
    // local
    // return `vids/web/${props.song.id}-pose/high.m3u8`;
  }

  handleHls(video) {
    if (
      Hls.isSupported() &&
      !video.canPlayType("application/vnd.apple.mpegurl")
    ) {
      var hls = new Hls();
      hls.loadSource(video.querySelector('source').src);
      hls.attachMedia(video);
    }
  }
}

export default DragPlayer;
