import React from "react";
import Curtain from "./Curtain";

export default function IntroScreen(props) {
  return (
    <div>
      <a href="#main" className="enter" onClick={props.onEnter}>
        <img src="img/enterButton.png" />
      </a>
      <Curtain />
    </div>
  );
}
