import { Close } from "../Buttons";
import React from "react";

export default function (props) {
    let secondaryBarOpenClose = props.openClose ? "open" : "closed";

  let maybeCloseButton = props.onClose == null ? null : (
    <div className="close-button2">
      <Close onClick={props.onClose} />
    </div>
  );

  return (
    <div className={"secondary-sidebar " + secondaryBarOpenClose}>
      <div className="close-sidebar-left">
        {maybeCloseButton}
      </div>
      <div className="content-sidebar">{props.children}</div>
    </div>
  );
}
