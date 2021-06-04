import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Exercises in Futility I', duration: '7:59' },
    { title: 'Exercises in Futility II', duration: '7:49' },
    { title: 'Exercises in Futility III', duration: '4:38' },
    { title: 'Exercises in Futility IV', duration: '5:15' },
    { title: 'Exercises in Futility V', duration: '8:15' },
    { title: 'Exercises in Futility VI', duration: '5:20' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  //if not return currently selected song
  return selectedSong;
};

// now every file in project can get access to reducers
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
