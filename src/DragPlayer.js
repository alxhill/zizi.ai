import React from "react";

class DragPlayer extends React.Component {
  static defaultProps = {
    zoom: false,
    pose: false,
    act: "roses",
    performer: "me",
    shadow: false,
    playing: false,
  };

  constructor(props) {
    super(props);
    this.dragVideo = React.createRef();
  }

  render() {
    return (
      <video
        className={this.props.className}
        playsInline={true}
        muted={true}
        ref={this.dragVideo}
      >
        <source
          src={this.props.shadow ? this.renderShadowUrl() : this.renderUrl()}
          type="video/mp4"
        />
      </video>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing && !this.props.playing) {
      this.dragVideo.current.pause();
    } else if (!prevProps.playing && this.props.playing) {
      this.dragVideo.current.play();
    }

    if (this.props.playing) {
      this.sync(this.props.currentTime);
    }

    window.dragVideo = this.dragVideo;
  }

  sync(newTime) {
    if (Math.abs(newTime - this.dragVideo.current.currentTime) > 0.1) {
      console.log("UPDATING TIME", this.dragVideo.current.currentTime, newTime);
      this.dragVideo.current.currentTime = newTime;
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
