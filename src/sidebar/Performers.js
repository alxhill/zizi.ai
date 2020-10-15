import React from "react";

export default class Performers extends React.PureComponent {

  render() {
    if (this.props.content === "thumbnails") {
      return this.renderThumbnails();
    } else {
      let performer = this.props.performers[this.props.content]
      return this.renderAboutView(performer);
    }
  }

  renderThumbnails() {
    let renderedPerformers = [];
    for (const performerId in this.props.performers) {
      renderedPerformers.push(
        this.renderPerformer(this.props.performers[performerId])
      );
    }

    let src = this.props.mode === "pick" ? "img/pick-performers.png" : "img/performers.png";

    return (
      <div>
        <img
          alt=""
          src={src}
          draggable="false"
          className="secondary-header"
        />
        <div className="performers-list">{renderedPerformers}</div>
      </div>
    );
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
          <a onClick={() => this.props.showAboutView(performer.id)}>About</a>
        </p>
      </div>
    );
  }

  renderAboutView(performer) {
    return (
      <div className="bios">
        <h2>{performer.name}</h2>

        <img
          alt={`Image of '${performer.name}'`}
          src={`img/performers/BioImage/${performer.id}.jpg`}
          draggable="false"
        />

        <p>{performer.bio}</p>
        <p>{performer.insta}</p>
        <a onClick={this.props.showThumbnails}>Back</a>
      </div>
    );
  }
}
