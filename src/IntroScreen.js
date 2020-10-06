import React from "react";
import Curtain from "./Curtain";

export default function IntroScreen(props) {
  return (
    <div>
      <div className="enter">
        <img src="img/enterButton.png" />
      </div>
      <Curtain type="side" />
      <Curtain type="bg" />
    </div>
  );
}
