import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css";
import ShowData from "./ShowData";
import IntroScreen from "./IntroScreen";
import ZiziPicker from "./ZiziPicker";
import About from "./About";
import { Dimensions } from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "zizi",
      chosenSong: "iam",
      chosenPerformer: "amalgam",
      source: "enter",
      orientation: ''
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

  // getOrientation = () => {
  //   if (this.refs.rootView) {
  //     if (Dimensions.get('window').width < Dimensions.get('window').height) {
  //       this.setState({ orientation: 'portrait' });
  //     }
  //     else {
  //       this.setState({ orientation: 'landscape' });
  //     }
  //   }
  // }
  // componentDidMount() {
  //   this.getOrientation();
  //   Dimensions.addEventListener('change', () => {
  //     this.getOrientation();
  //     // window.scrollTo(0, 0);
  //   });
  // }
}