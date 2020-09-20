import React from "react";
import {
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  PrevPerformer,
  NextPerformer,
  Close,
  Menu,
  Forward10,
  Back10,
  SkipToNextTrack,
} from "./Buttons";

export default class ZiziSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullSize: false,
    };
  }

  render() {
    return (
      <div className="zizi-sidebar">
        {this.renderMainbar()}
        {this.renderMinibar()}
      </div>
    );
  }

  renderMinibar() {
    let zoomInOut = this.props.zoom ? (
      <ZoomOut onClick={this.props.onZoomOut} />
    ) : (
      <ZoomIn onClick={this.props.onZoomIn} />
    );

    return (
      <div className="mini-sidebar">
        <Close onClick={this.hideMain} />
        <div className="centered-buttons">
          {zoomInOut}
          <NextPerformer onClick={this.props.onNextPerformer} />
          <PrevPerformer onClick={this.props.onPrevPerformer} />
        </div>
        <div className="dummy-spacing-div" />
      </div>
    );
  }

  renderMainbar() {
    let playPause = this.props.playing ? (
      <Pause onClick={this.props.onPause} />
    ) : (
      <Play onClick={this.props.onPlay} />
    );

    return (
      <div className="main-sidebar">
        <img src="img/title.png" />
        <div className="player-controls">
          {playPause}
          <Back10 />
          <Forward10 />
          <SkipToNextTrack />
        </div>
      </div>
    );
  }

  hideMain = () => {
    console.log("hiding main bar");
  };
}
