import React from "react";

export default class Performers extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      mode: "thumbnails",
      performer: null,
    };
  }

  render() {
    if (this.state.mode === "thumbnails") {
      let renderedPerformers = [];
      for (const performerId in this.props.performers) {
        renderedPerformers.push(
          this.renderPerformer(this.props.performers[performerId])
        );
      }

      return (
        <div>
          <img
            alt=""
            src="img/performers.png"
            draggable="false"
            className="secondary-header"
          />
          <div className="performers-list">{renderedPerformers}</div>
        </div>
      );
    } else {
      return (
        <div className="bios">
          <h1>
            {this.state.performer.name}
          </h1>

          <img
            alt={`Image of '${this.state.performer.name}'`}
            src={`img/performers/BioImage/${this.state.performer.id}.jpg`}
            draggable="false"
          />

          <p>
            {this.state.performer.bio}
          </p>

          <p>
            {this.state.performer.insta}
          </p>  

          <a onClick={this.backToThumbnails}>Back</a>
        </div>
      );
    }
  }

  renderPerformer(performer) {
    return (
      <div className="performer" key={performer.id}>
        <a onClick={() => this.props.changePerformer(performer.id)}>
          <img
            alt={`Image of '${performer.name}'`}
            src={`img/performers/PickerImage/${performer.id}.jpg`}
            draggable="false"
          />
          <p>{performer.name}</p>
        </a>
        <p className="info">
          <a onClick={() => this.moreInfo(performer)}>About</a>
        </p>
      </div>
    );
  }

  moreInfo = (performer) => {
    console.log(performer)
    this.setState({ mode: "more-info", performer: performer });
  };

  backToThumbnails = () => {
    this.setState({ mode: "thumbnails", performer: null });
  };
}
