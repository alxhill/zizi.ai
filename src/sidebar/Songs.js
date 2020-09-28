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
        <img src="img/pick.png" className="secondary-header" />
        <div className="songs-list">{renderedSongs}</div>
      </div>
    );
  }

  renderSong(songs) {
    return (
      <div className="song" key={songs.id}>
        <a onClick={() => this.props.changeSong(songs.id)}>
          <p>
            <img src={`img/album_covers/${songs.id}.jpg`} />
            {songs.name} | {songs.artist} <br />
            Movement originally trained on <a>{songs.perfomer}</a>
          </p>
        </a>
      </div>
    );
  }
}
