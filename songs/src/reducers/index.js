import { combineReducers } from "redux";

const songlist = [
  {
    title: "God is Good",
    duration: "5:45",
  },
  {
    title: "God is alive",
    duration: "10:45",
  },
  {
    title: "God is Infinte",
    duration: "20:45",
  },
  {
    title: "Praise the most high",
    duration: "15:45",
  },
];

const songsReducer = (listOfSongs = songlist, action) => {
  return [...listOfSongs];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

const reducers = combineReducers({
  songs: songsReducer,
  selectSong: selectSongReducer,
});

export default reducers;
