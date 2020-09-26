import React from "react";

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
    return (
      <video
        autoPlay={this.props.playing}
        className={this.props.className}
        playsInline={true}
        muted={true}
        ref={this.dragVideo}
      >
        <source src={this.renderUrl(this.props)} type="video/mp4" />
      </video>
    );
  }

  componentDidMount() {
    this.dragVideo.current.currentTime = this.props.currentTime;
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

    if (this.renderUrl(prevProps) != this.renderUrl(this.props)) {
      player.load();
      player.currentTime = this.props.currentTime;
    }
  }

  sync(newTime) {
    if (Math.abs(newTime - this.dragVideo.current.currentTime) > 0.1) {
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
    let zoomString = props.zoom ? "close" : "full";
    let ziziString = props.pose ? "pose" : props.performer.id;
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vids/${props.song.id}-${ziziString}-${zoomString}.mp4`;
  }

  renderShadowUrl(props) {
    let zoomString = props.zoom ? "close" : "full";
    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/vids/${props.song.id}-shadow-${zoomString}.mp4`;
  }
}

export default DragPlayer;
