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
    <a>
      <PlayArrowRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function Pause(props) {
  return (
    <a>
      <PauseRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function ZoomOut(props) {
  return (
    <a>
      <ZoomOutRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function ZoomIn(props) {
  return (
    <a>
      <ZoomInRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function PrevPerformer(props) {
  return (
    <a>
      <ArrowBackIosRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function NextPerformer(props) {
  return (
    <a>
      <ArrowForwardIosRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function Close(props) {
  return (
    <a className="close">
      <CloseRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function Menu(props) {
  return (
    <a>
      <MenuRounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function Forward10(props) {
  return (
    <a>
      <Forward10Rounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function Back10(props) {
  return (
    <a>
      <Replay10Rounded fontSize="large" onClick={props.onClick} />
    </a>
  );
}

function SkipToNextTrack(props) {
  return (
    <a>
      <SkipNextRounded fontSize="large" onClick={props.onClick} />
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
