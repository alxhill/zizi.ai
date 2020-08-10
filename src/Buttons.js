import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faEyeSlash,
  faEye,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";

function Play(props) {
  return <FontAwesomeIcon icon={faPlay} onClick={props.onClick} />;
}

function Pause(props) {
  return <FontAwesomeIcon icon={faPause} onClick={props.onClick} />;
}

function Hide(props) {
  return <FontAwesomeIcon icon={faEyeSlash} onClick={props.onClick} />;
}

function Show(props) {
  return <FontAwesomeIcon icon={faEye} onClick={props.onClick} />;
}

function ZoomOut(props) {
  return <FontAwesomeIcon icon={faSearchMinus} onClick={props.onClick} />;
}

function ZoomIn(props) {
  return <FontAwesomeIcon icon={faSearchPlus} onClick={props.onClick} />;
}

export { Play, Pause, Hide, Show, ZoomIn, ZoomOut };
