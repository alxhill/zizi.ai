import { FastForwardRounded } from "@material-ui/icons";
import React from "react";
import Curtain from "./Curtain";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: true
    }
  }

  render() {
    if (this.state.entered) {
      return <div className="enter-screen">
        <video className="intro-video" onEnded={this.props.onEnter} autoPlay={true}>
          <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/vids/iam-pose-full.mp4"/>
        </video>
        <button onClick={this.props.onEnter}>Skip Intro <i className="material-icons-round">fast_forward</i></button>
        <Curtain />
      </div>
    }

    return (
      <div className="enter-screen">
        <a className="enter" onClick={() => this.setState({entered: true})}>
          <img src="img/enterButton.png" />
        </a>
        <Curtain />
      </div>
    );
  }
}
