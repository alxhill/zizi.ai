import React from "react";

class DragPlayer extends React.Component {
  static defaultProps = {
    zoom: false,
    pose: false,
    act: "roses",
    performer: "me",
    video: {
      autoPlay: false,
      loop: false,
      playsInline: true,
      muted: true,
    },
    playing: false,
  };

  constructor(props) {
    super(props);
    this.primaryVideo = React.createRef();
  }

  render() {
    let { autoPlay, loop, playsInline, muted } = this.props.video;
    return (
      <div className="drag-player">
        <video
          className="primary-player"
          autoPlay={autoPlay}
          loop={loop}
          playsInline={playsInline}
          muted={muted}
          ref={this.primaryVideo}
        >
          <source src={this.renderUrl()} type="video/mp4" />
        </video>
        {/* <video className="shadowPlayer"
        autoPlay={autoPlay}
        loop={loop}
        playsInline={playsInline}
        muted={muted}
        ref={this.shadowVideo}>
          
        </video> */}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing && !this.props.playing) {
      this.primaryVideo.current.pause();
    } else if (!prevProps.playing && this.props.playing) {
      this.primaryVideo.current.play();
    }

    if (this.props.playing) {
      this.sync(this.props.currentTime);
    }

    window.primaryVideo = this.primaryVideo;
  }

  play() {
    console.log("play!");
  }

  pause() {
    console.log("pause!");
  }

  sync(newTime) {
    if (Math.abs(newTime - this.primaryVideo.current.currentTime) > 0.1) {
      console.log("UPDATING TIME", this.primaryVideo.current.currentTime, newTime);
      this.primaryVideo.current.currentTime = newTime;
    }
  }

  renderUrl() {
    let zoomString = this.props.zoom ? "close" : "full";
    let ziziString = this.props.pose ? "pose" : this.props.performer;

    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/development/${this.props.act}-${ziziString}-${zoomString}.mp4`;
  }

  // not yet used
  renderShadowUrl() {
    let zoomString = this.props.zoom ? "close" : "full";
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/development/${this.props.act}-shadow-${zoomString}.mp4`;
  }
}

export default DragPlayer;
