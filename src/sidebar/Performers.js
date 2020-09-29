import React from "react";

export default class Performers extends React.PureComponent {
  render() {
    let renderedPerformers = [];
    for (const performerId in this.props.performers) {
      renderedPerformers.push(
        this.renderPerformer(this.props.performers[performerId])
      );
    }

    return (
        <div>
        <img src="img/performers.png" className="secondary-header" draggable="false"/>
        <div className="performers-list">{renderedPerformers}</div>
    </div>
    );
  }

  renderPerformer(performer) {
    return (
      <div className="performer" key={performer.id}>
        <a onClick={() => this.props.changePerformer(performer.id)}>
          <img src={`img/performers/PickerImage/${performer.id}.jpg`} />
          <p>{performer.name}</p>
        </a>
        <small><p><a href="#">More Info</a></p></small>
      </div>
    );
  }
}
