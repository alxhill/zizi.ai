import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css";
import ShowData from "./ShowData";
import IntroScreen from "./IntroScreen";
import ZiziPicker from "./ZiziPicker";
import Curtain from "./Curtain";
import About from "./About";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "intro",
      chosenSong: "iam",
      chosenPerformer: "amalgam",
      source: "enter",
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
    this.setState({ mode: "zizi" });
  };
}

// Intro

// Enter button - img/enterButton.png & img/enterButtonHover.png

// Could animate curtains with css - curtain-side-full.png (split left and right)
// Or as start of host-intro.m3u8
// then play host-intro-test.m3u8 with music from youtube - id: "Si2KRXIfE4M"
// then host-between-test.m3u8 with layers/shadow and zoom enabled - sound direct from audio file between songs - performers panel, then songs panel comes out when this video loads (or 2 sec delay?)
