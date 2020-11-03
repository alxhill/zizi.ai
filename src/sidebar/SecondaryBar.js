import { Close } from "../Buttons";
import React from "react";

export default function (props) {
  let secondaryBarOpenClose = props.openClose ? "open" : "closed";
  let classes = ["secondary-sidebar", props.className, secondaryBarOpenClose];

  let maybeCloseButton = props.onClose == null ? null : (
    <div className="close-button">
      <Close onClick={props.onClose} />
    </div>
  );

  return (
    <div className={classes.join(" ")}>
      <div className="close-sidebar-left">
        {maybeCloseButton}
      </div>
      <div className="content-sidebar">{props.children}</div>
    </div>
  );
}
