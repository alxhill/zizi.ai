import React from "react";
import {
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  ShowPerformers,
  NewPerformer,
  Close,
  Menu,
  Forward10,
  Back10,
  SkipToNextTrack,
  ShowSongs,
  Captions,
} from "../Buttons";
import Performers from "./Performers";
import Songs from "./Songs";
import About from "./About";

export default class ZiziSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullSize: false,
      showSecondaryBar: false,
      secondaryBar: "none"
    };
  }

  render() {
      let openCloseClassName = this.state.fullSize ? "open" : "closed";
    return (<div>
      <div className={"zizi-sidebar " + openCloseClassName}>
        {this.renderMainbar()}
        {this.renderMinibar()}
      </div>
      {this.renderSecondaryBar()}
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
      <div className="mini-sidebar button-sidebar">
        <div className="top-buttons">
          {hideShow}

          {/* Temporary ACTS & PLAY Button - For Dev */}
          <br></br>
          <ShowSongs onClick={this.showSongs} />
          <br></br>
          <Play onClick={this.props.onPlay} />

        </div>
        <div className="centered-buttons">
          {zoomInOut}
          <SkipToNextTrack />
          <ShowPerformers onClick={this.showPerformers} />
          <NewPerformer onClick={() => this.props.newPerformer()}/>
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
            <Captions />
          </div>
          <div className="now-playing">
          <p></p>
            <p>"Raise Your Glass" by P!nk</p>
            <sub>Original performance by <a className="inline-link" href="#strats">{this.props.showData.performers["ruby"].name}</a></sub>
            <sub>Deepfake trained on <a className="inline-link" href="#dstir">{this.props.showData.performers["lilly"].name}</a></sub>
          </div>
          <div className="about-button">
            <a onClick={this.showAbout} className="sidebar-large-button">ABOUT</a>
          </div>
        </div>
        <div className="copyright">
            <sub>The Zizi Project&copy;</sub>
            <sub><a className="inline-link" href="https://jakeelwes.com"> Jake Elwes</a> 2020</sub>
            <sub>Part of <a className="inline-link" href="https://newsreal.cc">newsreal.cc</a></sub>
        </div>
      </div>
    );
  }

  renderSecondaryBar() {
    let secondaryBarOpenClose = this.state.showSecondaryBar ? "open" : "closed";
    return (
      <div className={"secondary-sidebar " + secondaryBarOpenClose}>
        <div className="close-sidebar-left">
        <div className="close-button2">
          <Close onClick={this.hideSecondaryBar} />
        </div>
        </div>
       <div className="content-sidebar">
        {this.renderSecondaryBarContent()}
        </div>
      </div>
    )
  }

  renderSecondaryBarContent() {
    switch (this.state.secondaryBar) {
      case "about":
        return <About />

      case "performers":
        return <Performers changePerformer={this.props.changePerformer} performers={this.props.showData.performers} />

      case "songs":
        return <Songs changeSong={this.props.changeSong} songs={this.props.showData.songs} performers={this.props.showData.performers} />

      default:
      case "none": 
        return <div></div>
    }

  }

  hideMain = () => {
    this.setState({fullSize: false})
  };

  showMain = () => {
      this.setState({fullSize: true})
  }

  showPerformers = () => {
    this.setState({secondaryBar: "performers", showSecondaryBar: true})
  }

  showAbout = () => {
    this.setState({secondaryBar: "about", showSecondaryBar: true})
  }

  showSongs = () => {
    this.setState({secondaryBar: "songs", showSecondaryBar: true})
  }

  hideSecondaryBar = () => {
      this.setState({showSecondaryBar: false})
  }
}
