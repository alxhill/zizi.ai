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

    return (
      <div>
        <img
          alt=""
          src="img/pick-performer.png"
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
        <button type="button" className="pick-performer" onClick={() => this.props.changePerformer(performer.id)}>
          <img
            alt={performer.name}
            src={`img/performers/PickerImage/${performer.id}.jpg`}
            draggable="false"
          />
          <div class="name">{performer.name}</div>
        </button>
        <button type="button" className="info" onClick={() => this.props.showAboutView(performer.id)}>About</button>
      </div>
    );
  }

  renderAboutView(performer) {
    return (
      <div className="bios">
        <button type="button" className="backbutton" onClick={this.props.showThumbnails}>Back</button>
        <div className="biosPadding">
          <h2>{performer.name}</h2>

          <img
            alt={performer.name}
            src={`img/performers/BioImage/${performer.id}.jpg`}
            draggable="false"
          />
          <a className="instagram" target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/' + performer.insta}>@{performer.insta}</a>
          <p>{performer.bio}</p>
        </div>
      </div>
    );
  }
}
