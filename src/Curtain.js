import React from "react";

export default function Curtain(props) {
  let zoomString = props.zoom ? "close" : "full";
  let srcBg = "img/curtain-bg-" + zoomString + ".jpg";
  let srcSide = "img/curtain-side-" + zoomString + ".png";
  return [
      <img key="one" src={srcBg} className="curtain-bg " draggable={false} alt="" />,
      <img key="two" src={srcSide} className="curtain-side" draggable={false} alt="" />
  ];
}
