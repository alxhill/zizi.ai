import React from "react";
import {
  PlayArrowRounded,
  PauseRounded,
  ZoomInRounded,
  ZoomOutRounded,
  SkipNextRounded,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  CloseRounded,
  Forward10Rounded,
  Replay10Rounded,
  MenuRounded,
} from "@material-ui/icons";

function Play(props) {
  return (
    <a className="zizi-icon">
      <PlayArrowRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function Pause(props) {
  return (
    <a className="zizi-icon">
      <PauseRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function ZoomOut(props) {
  return (
    <a className="zizi-icon">
      <ZoomOutRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function ZoomIn(props) {
  return (
    <a className="zizi-icon">
      <ZoomInRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function PrevPerformer(props) {
  return (
    <a className="zizi-icon">
      <ArrowBackIosRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function NextPerformer(props) {
  return (
    <a className="zizi-icon">
      <ArrowForwardIosRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function Close(props) {
  return (
    <a className="zizi-icon close">
      <CloseRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function Menu(props) {
  return (
    <a className="zizi-icon">
      <MenuRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function Forward10(props) {
  return (
    <a className="zizi-icon">
      <Forward10Rounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function Back10(props) {
  return (
    <a className="zizi-icon">
      <Replay10Rounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function SkipToNextTrack(props) {
  return (
    <a className="zizi-icon">
      <SkipNextRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

export {
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  PrevPerformer,
  NextPerformer,
  Close,
  Menu,
  Forward10,
  Back10,
  SkipToNextTrack,
};
