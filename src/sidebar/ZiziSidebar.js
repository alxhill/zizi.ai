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
  Fullscreen,
} from "../Buttons";
import Performers from "./Performers";
import Songs from "./Songs";
import About from "./About";
import SecondaryBar from "./SecondaryBar";

export default class ZiziSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullSize: false,
      showSecondaryBar: false,
      secondaryBar: {
        type: "none",
      },
    };
  }

  render() {
    let openCloseClassName = this.state.fullSize ? "open" : "closed";
    return (
      <div>
        <div className={"zizi-sidebar " + openCloseClassName}>
          {this.renderMainbar()}
          {this.renderMinibar()}
        </div>
        {this.renderSecondaryBar()}
      </div>
    );
  }

  renderMinibar() {
    let zoomInOut = this.props.zoom ? (
      <ZoomOut onClick={this.props.onZoomOut} />
    ) : (
      <ZoomIn onClick={this.props.onZoomIn} />
    );

    let hideShow = this.state.fullSize ? (
      <Close onClick={this.hideMain} />
    ) : (
      <Menu onClick={this.showMain} />
    );

    return (
      <div className="mini-sidebar button-sidebar">
        <div className="close-button">{hideShow}</div>
        <div className="centered-buttons">
          {zoomInOut}
          <SkipToNextTrack onClick={this.props.switchToPicker} />
          <ShowPerformers onClick={this.showPerformers} />
          <NewPerformer onClick={this.props.newPerformer} />
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

    let movementPerformer = this.props.showData.performers[this.props.song.performer];
    let bodyPerformer = this.props.performer;

    return (
      <div className="main-sidebar">
        <img
          src="img/title.png"
          id="main-bar-logo"
          alt="The Zizi Show"
          draggable="false"
        />
        <div className="main-bar-content">
          <div className="player-controls">
            {playPause}
            <Back10 onClick={this.props.onBack10}/>
            <Forward10 onClick={this.props.onForward10}/>
            <Fullscreen />
          </div>
          <div className="now-playing">
            <p>{`"${this.props.song.name}" by ${this.props.song.artist}`}</p>
            <sub>
              Movement by <a className="inline-link" onClick={() => this.showAboutView(movementPerformer.id)}>
                {movementPerformer.name}
              </a>
            </sub>
            <sub>
              Deepfake trained on <a className="inline-link" onClick={() => this.showAboutView(bodyPerformer.id)}>
                {bodyPerformer.name}
              </a>
            </sub>
          </div>
          <div className="about-button">
            <a onClick={this.showAbout} className="sidebar-large-button">
              ABOUT
            </a>
          </div>
        </div>
        <div className="copyright">
          <sub>The Zizi Project&copy;</sub>
          <sub>
            <a className="inline-link" href="https://jakeelwes.com">
              Jake Elwes</a> 2020
          </sub>
          <sub>
            Part of <a className="inline-link" href="https://newreal.cc">
              newreal.cc
            </a>
          </sub>
          <sub>
            {/* <a className="inline-link" href="https://instagram.com/zizidrag">
              Instagram
            </a> */}
          </sub>
        </div>
      </div>
    );
  }

  renderSecondaryBar() {
    return (
      <SecondaryBar onClose={this.hideSecondaryBar} openClose={this.state.showSecondaryBar}>
          {this.renderSecondaryBarContent()}
      </SecondaryBar>
    );
  }

  renderSecondaryBarContent() {
    switch (this.state.secondaryBar.type) {
      case "about":
        return <About />;

      case "performers":
        return (
          <Performers
            changePerformer={this.props.changePerformer}
            performers={this.props.showData.performers}
            content={this.state.secondaryBar.content}
            showAboutView={this.showAboutView}
            showThumbnails={this.showThumbnails}
          />
        );

      case "songs":
        return (
          <Songs
            changeSong={this.props.changeSong}
            songs={this.props.showData.songs}
            performers={this.props.showData.performers}
          />
        );

      default:
      case "none":
        return <div></div>;
    }
  }

  hideMain = () => {
    this.setState({ fullSize: false });
  };

  showMain = () => {
    this.setState({ fullSize: true });
  };

  showPerformers = () => {
    this.setState({
      secondaryBar: { type: "performers", content: "thumbnails" },
      showSecondaryBar: true,
    });
  };

  showAbout = () => {
    this.setState({ secondaryBar: { type: "about" }, showSecondaryBar: true });
  };

  showSongs = () => {
    this.setState({ secondaryBar: { type: "songs" }, showSecondaryBar: true });
  };

  showAboutView = (performer) => {
    this.setState({
      secondaryBar: { type: "performers", content: performer },
      showSecondaryBar: true,
    });
  };

  showThumbnails = () => {
    this.setState({
      secondaryBar: { type: "performers", content: "thumbnails" },
      showSecondaryBar: true,
    });
  };

  hideSecondaryBar = () => {
    this.setState({ showSecondaryBar: false });
  };
}