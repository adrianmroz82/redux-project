import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h1>Select a song</h1>;
  }

  return (
    <div>
      <h1>Picked track: </h1>
      <h3>Title: {song.title}</h3>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
