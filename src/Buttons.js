import React from "react";
import {
  PlayArrowRounded,
  PauseRounded,
  ZoomInRounded,
  ZoomOutRounded,
  SkipNextRounded,
  CloseRounded,
  Forward10Rounded,
  Replay10Rounded,
  MenuRounded,
  PersonAddRounded,
  GroupTwoTone,
  FullscreenRounded,
  ListRounded
  // Wanted 'GroupsTwoTone' not 'GroupTwoTone' but not found? https://material.io/resources/icons/?search=groups&style=twotone
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
      <PauseRounded font Size="inherit" onClick={props.onClick} />
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

function ShowPerformers(props) {
  return (
    <a className="zizi-icon">
      <GroupTwoTone fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}

function NewPerformer(props) {
  return (
    <a className="zizi-icon">
      <PersonAddRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}


function Fullscreen(props) {
  return (
    <a className="zizi-icon">
      <FullscreenRounded fontSize="inherit" onClick={props.onClick} />
    </a>
  );
}


function ShowActs(props) {
  return (
    <a className="zizi-icon">
      <ListRounded fontSize="inherit" onClick={props.onClick} />
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
  ShowPerformers,
  NewPerformer,
  Close,
  Menu,
  Forward10,
  Back10,
  SkipToNextTrack,
  ShowActs,
  Fullscreen,
};
