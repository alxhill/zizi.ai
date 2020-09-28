import React from "react";

export default class Performers extends React.PureComponent {
  render() {
    let renderedPerformers = [];
    for (const performerId in this.props.performers) {
      renderedPerformers.push(
        this.renderPerformer(this.props.performers[performerId])
      );
    }

    return <div className="performers-list">{renderedPerformers}</div>;
  }

  renderPerformer(performer) {
    return (
      <div className="performer" key={performer.id}>
        <a onClick={this.props.changePerformer.bind(null, performer.id)}>
          <img src={`img/performers/${performer.id}.jpg`} />
          <p>{performer.name}</p>
        </a>
        <p><a href="#">More Info</a></p>
      </div>
    );
  }
}
