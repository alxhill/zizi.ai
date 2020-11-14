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
  FullscreenExit,
  Loading,
} from "../Buttons";
import Performers from "./Performers";
import Songs from "./Songs";
import SecondaryBar from "./SecondaryBar";

export default class ZiziSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.bar = React.createRef();
    this.state = {
      fullSize: false,
      fullscreen: false,
      showSecondaryBar: false,
      secondaryBar: {
        type: "none",
      },
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  };

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

    let loadPerformer = this.props.ziziVideoLoaded ? (
      <NewPerformer onClick={this.props.newPerformer} />
    ) : (
        <Loading />
      );

    return (
      <div className="button-sidebar">
        <div className="close-button">{hideShow}</div>
        <div className="centered-buttons">
          {zoomInOut}
          {loadPerformer}
          <ShowPerformers onClick={this.showPerformers} />
          <SkipToNextTrack onClick={this.props.switchToPicker} />
        </div>
        <div className="dummy-spacing-div" />
      </div>
    );
  }

  inlineLink(handleClick, text) {
    return (
      <button type="button" className="inline-link" onClick={handleClick}>
        {text}
      </button>
    );
  }

  renderMainbar() {
    let playPause = this.props.playing ? (
      <Pause onClick={this.props.onPause} />
    ) : (
        <Play onClick={this.props.onPlay} />
      );

    let movementPerformer = this.props.showData.performers[
      this.props.song.performer
    ];
    let bodyPerformer = this.props.performer;

    let fullscreen = this.state.fullscreen ? (
      <FullscreenExit onClick={this.fullscreenexit} />
    ) : (
        <Fullscreen onClick={this.fullscreen} />
      );

    return (
      <div className="main-sidebar" ref={this.bar}>
        <div className="main-bar-content">
          <img
            src="img/title.png"
            id="main-bar-logo-top"
            alt="The Zizi Show"
            draggable="false"
          />
          <div className="player-controls">
            {playPause}
            <Back10 onClick={this.props.onBack10} />
            <Forward10 onClick={this.props.onForward10} />
            {fullscreen}
          </div>
          <div className="divider"></div>
          <div className="now-playing">
            <div className="song-title">
              <i>'{this.props.song.name}'</i> | {this.props.song.artist}
            </div>
            <div className="credits">
              Movement by{" "}
              {this.inlineLink(
                () => this.showAboutView(movementPerformer.id),
                movementPerformer.name
              )}
            </div>
            <div className="credits">
              Deepfake trained on{" "}
              {this.inlineLink(
                () => this.showAboutView(bodyPerformer.id),
                bodyPerformer.name
              )}
            </div>
          </div>
          <div className="divider"></div>

          <div className="about-button">
            <button
              type="button"
              className="about-button"
              onClick={this.showAbout}
            >
              ABOUT
            </button>
          </div>
          <div className="divider"></div>
          <div className="copyright">
            <img
              src="img/title.png"
              id="main-bar-logo-bottom"
              alt="The Zizi Show"
              draggable="false"
            />
            <div>The Zizi Project&copy;</div>
            <div>
              <a className="inline-link" href="https://jakeelwes.com">
                Jake Elwes
              </a>{" "}
              2020
            </div>
            <div>
              Part of{" "}
              <a className="inline-link" href="https://newreal.cc">
                newreal.cc
              </a>
            </div>
            <div>
              {/* <a className="inline-link" href="https://instagram.com/zizidrag">
                      Instagram
                      </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSecondaryBar() {
    return (
      <SecondaryBar
        onClose={this.hideSecondaryBar}
        openClose={this.state.showSecondaryBar}
      >
        {this.renderSecondaryBarContent()}
      </SecondaryBar>
    );
  }

  renderSecondaryBarContent() {
    switch (this.state.secondaryBar.type) {
      case "performers":
        return (
          <Performers
            changePerformer={this.changePerformer}
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

  fullscreen = () => {
    var elem = document.documentElement;
    this.setState({ fullscreen: true });
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari × Unhandled Rejection (NotAllowedError) ... user denied permission. */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  fullscreenexit = () => {
    this.setState({ fullscreen: false });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  };

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 27:
        if(this.state.fullscreen == true) {
          this.fullscreenexit()
        }
        break;
      case 70:
        this.state.fullscreen ? (
          this.fullscreenexit()
        ) : (
            this.fullscreen()
          );
        break;
      default:
        break;
    }
  };

  changePerformer = (performer) => {
    this.setState({
      // performer: this.props.showData.performers[performerName],
      showSecondaryBar: false,
    });
    this.props.changePerformer(performer);
  };

  showPerformers = () => {
    this.setState({
      secondaryBar: { type: "performers", content: "thumbnails" },
      showSecondaryBar: !this.state.showSecondaryBar,
    });
  };

  showAbout = () => {
    this.props.switchToAbout(this.props.performer.id, this.props.song.id);
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
