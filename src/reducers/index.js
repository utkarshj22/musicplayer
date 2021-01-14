import { combineReducers } from "redux";
import songsReducers from "./songsReducers";
import albumReducers from "./albumReducers";
import playlistReducer from "./playlistReducer";

export default combineReducers({
  songs: songsReducers,
  albums: albumReducers,
  playlist: playlistReducer,
});
