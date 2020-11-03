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
        <img src="img/pick.png" className="secondary-header" draggable="false" alt="Pick an act" />
        <div className="songs-list">{renderedSongs}</div>
      </div>
    );
  }

  renderSong(song) {
    return (
      <div className="song" key={song.id}>
        <button type="button" onClick={() => this.props.changeSong(song.id)}>
            <img src={`img/album_covers/${song.id}.jpg`} draggable="false" alt="song" />
            <p>
            <span className="sname">{song.name}</span> | {song.artist} <br />
            <small>Movement by <b><span>{this.props.performers[song.performer].name}</span></b></small>
          </p>
        </button>
      </div>
    );
  }
}
