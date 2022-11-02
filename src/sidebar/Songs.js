import React from "react";

export default class Songs extends React.PureComponent {
  render() {
    let renderedSongs = [];
    for (const songId in this.props.songs) {
      renderedSongs.push(
        this.renderSong(this.props.songs[songId])
      );
      renderedSongs = renderedSongs.sort(() => Math.random() - 0.5)
    }

    return (
      <div>
        <img src="img/pick.png" className="secondary-header" draggable="false" alt="Pick an act" />
        <div className="songs-list">{renderedSongs}</div>
        {/* <div><p><small> More Acts Coming Soon</small></p></div> */}
      </div>
    );
  }

  renderSong(song) {
    let youtubetag = (song.type=="youtube") ? (
      <small><small></small></small>
    ) : (
      <div>{undefined}</div>
    );
    return (
      <div className="song" key={song.id}>
        <button type="button" onClick={() => this.props.changeSong(song.id)}>
            <img src={`img/album_covers/${song.id}.jpg`} draggable="false" alt="song" />
            <p>
            <span className="sname">{song.name}</span> | {song.artist} <br />
            <small>Movement by <b>{this.props.performers[song.performer].name}</b></small><br />
            {youtubetag}
          </p>
        </button>
      </div>
    );
  }
}
