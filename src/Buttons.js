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
  ListRounded,
  ClosedCaptionRounded
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
    <a className="zizi-icon" fontSize="inherit" onClick={props.onClick}>
      {/* <GroupTwoTone fontSize="inherit" onClick={props.onClick} /> */}
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/>        </svg>
      {/* <img src="icons/ShowPerformers.svg" fontSize="inherit" onClick={props.onClick} /> */}

    </a>
  );
}

function NewPerformer(props) {
  return (
    <a className="zizi-icon" fontSize="inherit" onClick={props.onClick}>
      {/* <PersonAddRounded fontSize="inherit" onClick={props.onClick} /> */}
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.487 12a2.248 2.248 0 10.001-4.497A2.248 2.248 0 0016.487 12zm0 1.125c-1.501 0-4.499.754-4.499 2.249v.562c0 .309.253.562.562.562h7.872a.564.564 0 00.562-.562v-.562c.002-1.496-2.995-2.249-4.497-2.249zm-10.254-.859a5.674 5.674 0 01-.622.81c-.557.586-1.285.742-2.069.702-.705-.036-.701 1.057 0 1.093 1.474.075 2.516-.562 3.346-1.647a9.412 9.412 0 01-.378-.53 16.245 16.245 0 01-.277-.428zm1.423-.87l.226.351c.138-.191.286-.375.452-.547.419-.433.897-.61 1.421-.661l-.099.121c-.192.228-.224.549 0 .773.197.197.581.228.773 0 .296-.351.578-.713.873-1.065.192-.193.266-.515.028-.773l-.984-1.065c-.479-.519-1.25.256-.773.773l.128.138c-.536.038-1.053.175-1.53.485a4.1 4.1 0 00-.923.855c.054.075.107.152.16.232.085.127.168.257.248.383zm2.772 1.171a.473.473 0 00-.369-.16.58.58 0 00-.404.16c-.224.224-.192.545 0 .773l.099.121c-.524-.05-1.002-.228-1.421-.661a5.613 5.613 0 01-.628-.8c-.183-.273-.354-.554-.536-.829a5.951 5.951 0 00-.106-.154c-.815-1.169-1.834-1.894-3.29-1.894a4.55 4.55 0 00-.232.006c-.69.035-.704 1.093-.034 1.093l.034-.001a4.28 4.28 0 01.225-.006c.698 0 1.34.178 1.844.708.31.327.555.7.794 1.077.113.179.226.358.344.535.101.151.206.302.316.449.313.418.668.805 1.108 1.091.477.31.993.446 1.53.485l-.128.138c-.366.396.002.944.41.944a.489.489 0 00.363-.172l.983-1.065c.238-.258.165-.58-.028-.773-.296-.352-.578-.714-.874-1.065z"/>
        </svg>
      {/* <img src="icons/NewPerfomer.svg" fontSize="inherit" onClick={props.onClick} /> */}

    </a>
  );
}


function Captions(props) {
  return (
    <a className="zizi-icon">
      <ClosedCaptionRounded fontSize="inherit" onClick={props.onClick} />
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
  Captions,
};
