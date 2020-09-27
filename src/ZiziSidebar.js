import React from "react";
import {
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
} from "./Buttons";

export default class ZiziSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullSize: false,
      showSecondaryBar: false,
      secondaryBar: "none"
    };
  }

  render() {
      let openCloseClassName = this.state.fullSize ? "open" : "closed";
    return (<div>
      <div className={"zizi-sidebar " + openCloseClassName}>
        {this.renderMainbar()}
        {this.renderMinibar()}
      </div>
      {this.renderSecondaryBar()}
      </div>
    );
  }

  renderMinibar() {
    let zoomInOut = this.props.zoom ? 
      (<ZoomOut onClick={this.props.onZoomOut} />) :
      (<ZoomIn onClick={this.props.onZoomIn} />);

    let hideShow = this.state.fullSize ?
      (<Close onClick={this.hideMain}/>) :
      (<Menu onClick={this.showMain}/>)
    
    return (
      <div className="mini-sidebar button-sidebar">
        <div className="top-buttons">
          {hideShow}

          {/* Temporary ACTS & PLAY Button - For Dev */}
          <br></br>
          <ShowActs onClick={this.showActs} />
          <br></br>
          <Play onClick={this.props.onPlay} />

        </div>
        <div className="centered-buttons">
          {zoomInOut}
          <SkipToNextTrack />
          <ShowPerformers onClick={this.showPerformers} />
          <NewPerformer onClick={() => this.props.changePerformer()}/>
        </div>
        <div className="dummy-spacing-div" />
      </div>
    );
  }

  renderMainbar() {
    let playPause = this.props.playing ? (
      <Pause onClick={this.props.onPause} />
    ) : (
      <Play onClick={this.props.onPlay} />
    );

    return (
      <div className="main-sidebar">
        <img src="img/title.png" id="main-bar-logo" alt="The Zizi Show" draggable="false"/>
        <div className="main-bar-content">
          <div className="player-controls">
            {playPause}
            <Back10 />
            <Forward10 />
            <Captions />
          </div>
          <div className="now-playing">
            <p>"Raise Your Glass" by P!nk</p>
            <sub>Original performance by <a className="inline-link" href="#strats">Ruby Wednesday</a></sub>
            <sub>Deepfake trained on <a className="inline-link" href="#dstir">Lilly Snatchdragon</a></sub>
          </div>
          <div className="about-button">
            <a onClick={this.showAbout} className="sidebar-large-button">ABOUT</a>
          </div>
        </div>
        <div className="copyright">
            <sub>The Zizi Project</sub>
            <sub><a className="inline-link" href="https://jakeelwes.com">Jake Elwes</a> 2020</sub>
            <sub>Part of <a className="inline-link" href="https://newsreal.cc">newsreal.cc</a></sub>
        </div>
      </div>
    );
  }

  renderSecondaryBar() {
    let secondaryBarOpenClose = this.state.showSecondaryBar ? "open" : "closed";
    return (
      <div className={"secondary-sidebar " + secondaryBarOpenClose}>
        <div className="close-sidebar button-sidebar">
          <Close onClick={this.hideSecondaryBar} />
        </div>
       <div className="content-sidebar">
        {this.renderSecondaryBarContent()}
        </div>
      </div>
    )
  }

  renderSecondaryBarContent() {
    switch (this.state.secondaryBar) {
      case "about":
        return <div>
          <img src="img/about.png" className="secondary-header"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est augue. Suspendisse potenti. Proin nisl tellus, placerat nec neque ut, tempus mollis augue.</p>
          <iframe width="80%" src="https://www.youtube.com/embed/QOK97wutH-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Mauris vulputate, magna vel pellentesque fermentum, neque mauris lobortis enim, non posuere enim lectus non quam. Vestibulum sagittis sem nulla, at sodales dolor auctor rutrum. Fusce lacinia efficitur erat, non bibendum mi pellentesque cursus. Aliquam justo neque, condimentum vitae pharetra non, congue ut ex. Donec iaculis vitae ante id condimentum.<br />Nulla viverra id neque sit amet convallis. Cras venenatis purus odio, a vehicula velit hendrerit ac. Mauris vulputate mattis vulputate. Aliquam lacinia magna sed tempor dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a elit in felis vehicula accumsan.</p>
      <iframe width="80%" src="https://www.youtube.com/embed/vtpVr5KVvnk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>


      case "performers":
        return <div>
          <img src="img/performers.png" className="secondary-header" />

          <a onClick={() => this.props.changePerformer("amalgam")}>
          <img src="img/performers/amalgam.jpg" height="80px"></img>
          <p>Zizi: Amalgam</p></a><br/>
          <p><a href="#amalgam">More Info</a></p>
          
          <a onClick={() => this.props.changePerformer("bolly")}>
          <img src="img/performers/bolly.jpg" height="80px"></img>
          <p>Bolly Illusion</p></a><br/>
          <p><a href="#amalgam">More Info</a></p>

          <a onClick={() => this.props.changePerformer("lilly")}>
          <img src="img/performers/Lilly.jpg" height="80px"></img>
          <p>Lilly</p></a><br/>
          <p><a href="#amalgam">More Info</a></p>

          <a onClick={() => this.props.changePerformer("mahatma")}>
          <img src="img/performers/mahatma.jpg" height="80px"></img>
          <p>Mahatma</p></a><br/>
          <p><a href="#amalgam">More Info</a></p>

        </div>
      case "acts":
        return <div>
          <img src="img/pick.png" className="secondary-header" />

          <a href="#fiveyears" onClick={() => this.props.changeSong("fiveyears")}>
            <p>Five Years | David Bowie<br />
            Performed by <a href="#ruby">Ruby Wednesday</a></p>
          </a>
          <a href="#freedom" onClick={() => this.props.changeSong("freedom")}>
            <p>Freedom! ’90 | George Michael<br />
            Performed by <a href="#mark">Mark Anthony</a></p>
          </a>
          <a href="#iam" onClick={() => this.props.changeSong("iam")}>
            <p>I Am What I Am | La Cage aux Folles<br />
            Performed by <a href="#me">Me</a></p>
          </a>
          <a href="#glass" onClick={() => this.props.changeSong("glass")}>
            <p>Raise Your Glass | P!nk<br />
            Performed by <a href="#lilly">Lilly Snatchdragon</a></p>
          </a>
          <a href="#nancy" onClick={() => this.props.changeSong("nancy")}>
            <p>Nancy Boy | Placebo<br />
            Performed by <a href="#ruby">Ruby Wednesday</a></p>
          </a>
          <a href="#mighty" onClick={() => this.props.changeSong("mighty")}>
            <p>You Make Me Feel | Sylvester<br />
            Performed by <a href="#chiyo">Chiyo</a></p>
          </a>
          <a href="#mylife" onClick={() => this.props.changeSong("mylife")}>
            <p>This Is My Life | Shirley Bassey<br />
            Performed by <a href="#me">Me</a></p>
          </a>


        </div>
      default:
      case "none": 
        return <div></div>
    }

  }

  hideMain = () => {
    this.setState({fullSize: false})
  };

  showMain = () => {
      this.setState({fullSize: true})
  }

  showPerformers = () => {
    this.setState({secondaryBar: "performers", showSecondaryBar: true})
  }

  showAbout = () => {
    this.setState({secondaryBar: "about", showSecondaryBar: true})
  }

  showActs = () => {
    this.setState({secondaryBar: "acts", showSecondaryBar: true})
  }

  hideSecondaryBar = () => {
      this.setState({showSecondaryBar: false})
  }
}
