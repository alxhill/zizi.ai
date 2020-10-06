import React from "react";

export default function Curtain(props) {
  let zoomString = props.zoom ? "close" : "full";
  let ext = props.type === "side" ? ".png" : ".jpg";
  let src = "img/curtain-" + props.type + "-" + zoomString + ext;
  let cls = "curtain-" + props.type;
  return <img src={src} className={cls} draggable={false} />;
}
