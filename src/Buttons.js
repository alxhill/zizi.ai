import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faEyeSlash,
  faEye,
  faSearchMinus,
  faSearchPlus,
  faArrowCircleLeft,
  faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

function Play(props) {
  return <a><FontAwesomeIcon icon={faPlay} onClick={props.onClick} /></a>;
}

function Pause(props) {
  return <a><FontAwesomeIcon icon={faPause} onClick={props.onClick} /></a>;
}

function Hide(props) {
  return <a><FontAwesomeIcon icon={faEyeSlash} onClick={props.onClick} /></a>;
}

function Show(props) {
  return <a><FontAwesomeIcon icon={faEye} onClick={props.onClick} /></a>;
}

function ZoomOut(props) {
  return <a><FontAwesomeIcon icon={faSearchMinus} onClick={props.onClick} /></a>;
}

function ZoomIn(props) {
  return <a><FontAwesomeIcon icon={faSearchPlus} onClick={props.onClick} /></a>;
}

function PrevAct(props) {
  return <a><FontAwesomeIcon icon={faArrowCircleLeft} onClick={props.onClick} /></a>;
}

function NextAct(props) {
  return <a><FontAwesomeIcon icon={faArrowCircleRight} onClick={props.onClick} /></a>;
}

export { Play, Pause, Hide, Show, ZoomIn, ZoomOut, PrevAct, NextAct };
