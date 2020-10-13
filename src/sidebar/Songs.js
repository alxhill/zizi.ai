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

  renderSong(song) {
    return (
      <div className="song" key={song.id}>
        <a onClick={() => this.props.changeSong(song.id)}>
            <img src={`img/album_covers/${song.id}.jpg`} draggable="false" />
            <p>
            <span>{song.name}</span> | {song.artist} <br />
            <small>Movement by <span>{this.props.performers[song.performer].name}</span></small>
          </p>
        </a>
      </div>
    );
  }
} 
