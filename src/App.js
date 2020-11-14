import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css";
import ShowData from "./ShowData";
import IntroScreen from "./IntroScreen";
import ZiziPicker from "./ZiziPicker";
import About from "./About";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "zizi",
      chosenSong: "iam",
      chosenPerformer: "amalgam",
      source: "enter",
      fullscreen: false,
      };
  }

  render() {
    switch (this.state.mode) {
      case "intro":
        return <IntroScreen onEnter={this.onEnter} />;
      default:
      case "zizi":
        return (
          <div className="zizi">
            <ZiziPlayer
              song={this.state.chosenSong}
              startingPerformer={this.state.chosenPerformer}
              showData={ShowData}
              switchToPicker={this.switchToPicker}
              switchToAbout={this.switchToAbout}
            />
          </div>
        );
      case "picker":
        return (
          <ZiziPicker
            showData={ShowData}
            switchToPlayer={this.switchToPlayer}
            switchToAbout={this.switchToAbout}
            source={this.state.source}
          />
        );
      case "about":
        return <About onBack={this.restorePlayer} />;
    }
  }

  onEnter = () => {
    this.setState({ mode: "picker", source: "enter" });
  };

  switchToPlayer = (performer, song) => {
    this.setState({
      mode: "zizi",
      chosenPerformer: performer,
      chosenSong: song,
    });
  };

  switchToPicker = () => {
    this.setState({
      mode: "picker",
      source: "song-end",
    });
  };

  switchToAbout = (returnToPerformer, returnToSong) => {
    this.setState({
      mode: "about",
      chosenPerformer: returnToPerformer,
      chosenSong: returnToSong,
    });
  };

  restorePlayer = () => {
    if (this.state.chosenPerformer == null || this.state.chosenSong == null) {
      this.setState({ mode: "picker" });
    } else {
      this.setState({ mode: "zizi" });
    }
  };

  fullscreenEnter = () => {
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

  fullscreenExit = () => {
    this.setState({ fullscreen: false });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  };
}

window.addEventListener('orientationchange', function() {
  if (window.orientation === 0 || window.orientation === 180) {
      // Reset scroll position if in portrait mode.
      // window.scrollTo({ top: 0 });
      // this.bar.current.scrollTo({ top: 30 });
      console.log("portrait")
  }
}, false);
// https://stackoverflow.com/questions/7759879/page-shifts-to-the-left-when-rotating-ipad-from-landscape-to-portrait

