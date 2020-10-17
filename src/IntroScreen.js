import { FastForwardRounded } from "@material-ui/icons";
import React from "react";
import Curtain from "./Curtain";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false,
      password: "",
    };
  }

  render() {
    if (this.state.entered) {
      return (
        <div className="enter-screen">
          <video
            className="intro-video"
            onEnded={this.props.onEnter}
            autoPlay={true}
          >
            <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/vids/host-between-test.mov" />
          </video>
          <button onClick={this.props.onEnter}>
            Skip Intro <FastForwardRounded fontSize="inherit" />
          </button>
          <Curtain />
        </div>
      );
    }

    return (
      <div className="enter-screen">
        <a className="enter" onClick={this.attemptLogin}>
          <img src="img/enterButton.png" />
        </a>
        <form onSubmit={this.attemptLogin}>
          <input
            className="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePassword}
            placeholder="Password"
          />
        </form>
        <Curtain />
      </div>
    );
  }

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  attemptLogin = (event) => {
    if (event !== null) {
      event.preventDefault();
    }
    if (btoa(this.state.password) === "ZGVlcGZha2U=") {
      this.setState({ entered: true });
    } else {
      alert("Invalid password!");
    }
  };
}
