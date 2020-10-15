import React from "react";
import Curtain from "./Curtain";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false
    }
  }

  render() {
    if (this.state.entered) {
      return <div>
        <video className="intro-video" onEnded={this.props.onEnter} autoPlay={true}>
          <source src="https://s3-eu-west-1.amazonaws.com/zizi.ai/vids/iam-pose-full.mp4"/>
        </video>
        <button onClick={this.props.onEnter}>Skip</button>
        <Curtain />
      </div>
    }

    return (
      <div>
        <a className="enter" onClick={() => this.setState({entered: true})}>
          <img src="img/enterButton.png" />
        </a>
        <Curtain />
      </div>
    );
  }
}
