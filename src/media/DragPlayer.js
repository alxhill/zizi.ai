import React from "react";
import Hls from "hls.js";
import { sideCurtain, backCurtain } from "../Curtain";
import { Play } from "../Buttons";


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
    this.state = {
      pose: false,
      poseOverride: false,
    };
  }

  render() {
    let poseVisibility = this.state.pose ? "visible" : "hidden";
    let primaryVisibility = this.state.pose ? "hidden" : "visible";
    let resumeVisible = this.props.playing ? "" : "visible";

    return (
      <div>
        <div className={"resume " + resumeVisible + " fade-in"}>
          <Play onClick={this.props.play} />
        </div>
        <div className="drag-video-wrapper" onMouseDown={this.showPose} onMouseUp={this.forceHidePose} onTouchStart={this.showPose} onTouchEnd={this.forceHidePose}>
          {backCurtain(this.props.zoom)}
          {sideCurtain(this.props.zoom)}
          {this.renderPlayer(
            ["primary-player", primaryVisibility],
            this.performerVideo,
            this.performerSrc(this.props),
            this.props.onEnded,
            this.hidePose
          )}
          {this.renderPlayer(
            ["shadow-player", primaryVisibility],
            this.shadowVideo,
            this.shadowSrc(this.props)
          )}
          {this.renderPlayer(
            ["pose-player", poseVisibility],
            this.poseVideo,
            this.poseSrc(this.props)
          )}
        </div>
      </div>
    );
  }

  renderPlayer(additionalClasses, ref, src, onEnded, onSeeked) {
    additionalClasses.push("video-frame")
    let zoomClass = this.props.zoom ? "zoom" : "full";
    return (
      <span className={additionalClasses.join(" ")}>
        <video
          autoPlay={this.props.playing}
          className={"drag-video " + zoomClass}
          playsInline={true}
          muted={true}
          ref={ref}
          onEnded={onEnded}
          onSeeked={onSeeked}
        >
          <source src={src} />
        </video>
      </span>
    );
  }

  componentDidMount() {
    this.loadVideo(this.performerVideo.current);
    this.loadVideo(this.shadowVideo.current);
    this.loadVideo(this.poseVideo.current);
  }

  loadVideo(video) {
    video.currentTime = this.props.currentTime;
    this.handleHls(video);
  }

  componentDidUpdate(prevProps) {
    let performer = this.performerVideo.current;
    let shadow = this.shadowVideo.current;
    let pose = this.poseVideo.current;

    let videos = [performer, shadow, pose]

    if (prevProps.playing && !this.props.playing) {
      videos.forEach((video) => video.pause());
    } else if (!prevProps.playing && this.props.playing) {
      videos.forEach((video) => video.play());
    }

    if (this.props.playing) {
      this.sync(this.props.currentTime);
    }

    if (this.performerSrc(prevProps) !== this.performerSrc(this.props)) {
      this.setState({ pose: true });
      this.reload(performer);
    }

    if (this.shadowSrc(prevProps) !== this.shadowSrc(this.props)) {
      this.reload(shadow);
    }

    if (this.poseSrc(prevProps) !== this.poseSrc(this.props)) {
      this.reload(pose);
    }
  }

  sync(newTime) {
    if (
      this.outOfSync(this.performerVideo.current, newTime) ||
      this.outOfSync(this.shadowVideo.current, newTime) ||
      this.outOfSync(this.poseVideo.current, newTime)
    ) {
      // console.log(
      //   "UPDATING TIME",
      //   this.performerVideo.current.currentTime,
      //   this.shadowVideo.current.currentTime,
      //   this.poseVideo.current.currentTime,
      //   newTime
      // );
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

  hidePose = () => {
    if (this.state.poseOverride === false) {
      this.setState({ pose: false });
    }
    this.props.onVideoLoaded()
  }

  showPose = () => {
    this.setState({ poseOverride: true, pose: true })
  }

  forceHidePose = () => {
    this.setState({ poseOverride: false, pose: false });
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
      hls.loadSource(video.querySelector("source").src);
      hls.attachMedia(video);
    }
  }
}

export default DragPlayer;
