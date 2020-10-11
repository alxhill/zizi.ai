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
        <div>
          <p>
            Stuff for specific person:
            {this.state.performer.name}
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
            alt={`AI generated of drag perfomer '${performer.name}'`}
            src={`img/performers/PickerImage/${performer.id}.jpg`}
            draggable="false"
          />
          <p>{performer.name}</p>
        </a>
        <p className="info">
          <a onClick={() => this.moreInfo(performer)}>More Info</a>
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
