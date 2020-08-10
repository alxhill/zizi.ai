import React from "react";

export default function Curtain(props) {
  let zoomString = props.zoom ? "close" : "full";
  let src = "img/curtain-" + zoomString + ".jpg";
  return <img src={src} className="curtain" draggable={false} />;
}
