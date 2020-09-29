import React from "react";

export default class Songs extends React.PureComponent {
  render() {
    let renderedSongs = [];
    for (const songId in this.props.songs) {
      renderedSongs.push(
        this.renderSong(this.props.songs[songId])
      );
    }

    return (
      <div>
        <img src="img/pick.png" className="secondary-header" draggable="false" />
        <div className="songs-list">{renderedSongs}</div>
      </div>
    );
  }

  renderSong(songs) {
    return (
      <div className="song" key={songs.id}>
        <a onClick={() => this.props.changeSong(songs.id)}>
            <img src={`img/album_covers/${songs.id}.jpg`} />
            <p>
            <w>{songs.name}</w> | {songs.artist} <br />
            <small>Movement originally trained on <a>{songs.performer}</a></small>
          </p>
        </a>
      </div>
    );
  }
} 
