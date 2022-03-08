import React from "react";

export function backCurtain(isZoomed) {
  let zoomString = isZoomed ? "close" : "full";
  return (
    <img
      src={"img/curtain-bg-" + zoomString + ".jpg"}
      className="curtain-bg "
      draggable={false}
      alt=""
    />
  );
}

export function sideCurtain(isZoomed) {
  let zoomString = isZoomed ? "close" : "full";
  return (
    <img
      src={"img/curtain-side-" + zoomString + ".png"}
      className="curtain-side"
      draggable={false}
      alt=""
    />
  );
}
