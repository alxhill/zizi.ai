import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css";
import ShowData from "./ShowData";
import IntroScreen from "./IntroScreen";
import ZiziPicker from "./ZiziPicker";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, generatePath } from "react-router-dom";
import SongPlayer from "./media/SongPlayer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "intro",
      chosenSong: "mylife",
      chosenPerformer: "amalgam",
      source: "enter",
      fullscreen: false,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/picker/:source">
            <ZiziPicker
              showData={ShowData}
              generateZiziUrl={this.generateZiziUrl}
              switchToAbout={this.switchToAbout}
            />
          </Route>
          <Route path="/zizi">
            <div className="zizi">
              <ZiziPlayer
                generateZiziUrl={this.generateZiziUrl}
                showData={ShowData}
              />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <IntroScreen onEnter={this.onEnter}/>
          </Route>
        </Switch>
      </Router>
    );
  }

  switchToPicker = () => {
    this.props.history.push("/picker/song-end")
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

  generateZiziUrl(performer, song) {
    return generatePath("/zizi?performer=:performer&song=:song", {
      performer: performer,
      song: song
    });
  }

  fullscreenEnter = () => {
    var elem = document.documentElement;
    this.setState({ fullscreen: true });
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari × Unhandled Rejection (NotAllowedError) ... user denied permission. */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  fullscreenExit = () => {
    this.setState({ fullscreen: false });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };
}

window.addEventListener(
  "orientationchange",
  function () {
    if (window.orientation === 0 || window.orientation === 180) {
      // Reset scroll position if in portrait mode.
      // window.scrollTo({ top: 0 });
      // this.bar.current.scrollTo({ top: 30 });
      console.log("portrait");
    }
  },
  false
);
// https://stackoverflow.com/questions/7759879/page-shifts-to-the-left-when-rotating-ipad-from-landscape-to-portrait