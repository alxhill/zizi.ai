import React from "react";
import {
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  // PrevPerformer,
  // NextPerformer,
  NewPerformer,
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
      fullSize: true,
      secondaryBar: "none"
    };
  }

  render() {
      let openCloseClassName = this.state.fullSize ? "open" : "closed";
    return (
      <div className={"zizi-sidebar " + openCloseClassName}>
        {this.renderMainbar()}
        {this.renderMinibar()}
        {this.state.secondaryBar === "none" || this.renderSecondaryBar()}
      </div>
    );
  }

  renderMinibar() {
    let zoomInOut = this.props.zoom ? 
      (<ZoomOut onClick={this.props.onZoomOut} />) :
      (<ZoomIn onClick={this.props.onZoomIn} />);

    let hideShow = this.state.fullSize ?
      (<Close onClick={this.hideMain}/>) :
      (<Menu onClick={this.showMain}/>)

    return (
      <div className="mini-sidebar">
        {hideShow}
        <div className="centered-buttons">
          {zoomInOut}
          <NewPerformer onClick={this.props.onNewPerformer} />
          <Play onClick={this.showAct} />
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
        <img src="img/title.png" id="main-bar-logo" alt="The Zizi Show" draggable="false"/>
        <div className="main-bar-content">
          <div className="player-controls">
            {playPause}
            <Back10 />
            <Forward10 />
            <SkipToNextTrack />
          </div>
          <div className="now-playing">
            <p>"Raise Your Glass" by P!nk</p>
            <sub>Original performance by <a className="inline-link" href="#strats">Ruby Wednesday</a></sub>
            <sub>Deepfake trained on <a className="inline-link" href="#dstir">Lilly Snatchdragon</a></sub>
          </div>
          <div className="performers-picker">
            <a onClick={this.showPerformers} className="sidebar-large-button">PERFORMERS</a>
          </div>
          <div className="about-button">
            <a onClick={this.showAbout} className="sidebar-large-button">ABOUT</a>
          </div>
        </div>
        <div className="copyright">
            <sub>The Zizi Project</sub>
            <sub><a className="inline-link" href="https://jakeelwes.com">Jake Elwes</a> 2020</sub>
            <sub>Part of <a className="inline-link" href="https://newsreal.cc">newsreal.cc</a></sub>
        </div>
      </div>
    );
  }

  renderSecondaryBar() {
    return (
      <div className="secondary-sidebar">
        <Close onClick={this.hideSecondaryBar} />
        <img src="img/about.png" class="secondary-header" draggable="false"/>
      </div>
    )
  }

  hideMain = () => {
    this.setState({fullSize: false})
  };

  showMain = () => {
      this.setState({fullSize: true})
  }

  showPerformers = () => {
    this.setState({secondaryBar: "performers"})
  }

  showAbout = () => {
    this.setState({secondaryBar: "about"})
  }

  showAbout = () => {
    this.setState({secondaryBar: "act"})
  }

  hideSecondaryBar = () => {
      this.setState({secondaryBar: "none"})
  }
}
