import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function Play(props) {
  return <FontAwesomeIcon icon={faPlay} onClick={props.onClick}/>;
}

function Pause(props) {
    return <FontAwesomeIcon icon={faPause} onClick={props.onClick}/>;
}

export {Play, Pause};