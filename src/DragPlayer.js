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
    playing: false
  };

  constructor(props) {
    super(props)
    this.primaryVideo = React.createRef()
  }

  render() {
    let { autoPlay, loop, playsInline, muted } = this.props.video;
    return (
      <div className="drag-player">
        <video
          autoPlay={autoPlay}
          loop={loop}
          playsInline={playsInline}
          muted={muted}
          ref={this.primaryVideo}
        >
          <source src={this.renderUrl()} type="video/mp4" />
        </video>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing && !this.props.playing) {
      this.primaryVideo.current.pause()
    } else if (!prevProps.playing && this.props.playing) {
      this.primaryVideo.current.play()
    }
  }

  play() {
    console.log('play!')
  }

  pause() {
    console.log('pause!')
  }

  seekTo(time) {
    console.log(time)
  }

  renderUrl() {
    let zoomString = this.props.zoom ? "close" : "full";
    let ziziString = this.props.pose ? "pose" : this.props.performer;

    return `https://s3-eu-west-1.amazonaws.com/zizi.ai/development/${this.props.act}-${ziziString}-${zoomString}.mp4`;
  }

  renderShadowUrl() {
    let zoomString = this.props.zoom ? "close" : "full";
    let URL2 = `https://s3-eu-west-1.amazonaws.com/zizi.ai/development/${this.props.act}-shadow-${zoomString}.mp4`;
  }
}

export default DragPlayer;
