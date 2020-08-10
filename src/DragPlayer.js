import React from "react";

class DragPlayer extends React.Component {
  static defaultProps = {
    zoom: false,
    pose: false,
    act: "roses",
    performer: "me",
    play: false,
    video: {
      autoPlay: false,
      loop: false,
      playsInline: true,
      muted: true
    }
  };

  render() {
    let {autoPlay, loop, playsInline, muted} = this.props.video
    return (
      <div className="drag-player">
        <video autoPlay={autoPlay} loop={loop} playsInline={playsInline} muted={muted}>
          <source src={this.renderUrl()} type="video/mp4" />
        </video>
      </div>
    );
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
