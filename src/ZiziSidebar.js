import React from "react";
import { Play, Pause, ZoomIn, ZoomOut, Show, Hide, PrevAct, NextAct } from "./Buttons";

export default class ZiziSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullSize: false
        }
    }

    render() {
        let playerButtons = !this.props.isLoaded || (
            <div className="player-buttons">
              <Play onClick={this.props.onPlay} />
              <Pause onClick={this.props.onPause} />
            </div>
          );

          return (
            <div className="button-group">
            {playerButtons}
              <div className="zoom-buttons">
                <ZoomOut onClick={this.props.onZoomOut}/>
                <ZoomIn onClick={this.props.onZoomIn}/>
              </div>
              <div className="pose-buttons">
                <Hide onClick={this.props.onEnablePose}/>
                <Show onClick={this.props.onDisablePose}/>
              </div>
              <div className="act-buttons">
                <PrevAct onClick={this.props.onPrevAct}/>
                <NextAct onClick={this.props.onNextAct}/>
              </div>
            </div>    
          )
    }
}