import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredSongs, clearFilter } from "../actions";

const SongFilter = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums)
  const setFilteredSongs = (e) => {
    if (e.target.value !== "") {
      setTimeout(() => {
        dispatch(filteredSongs(e.target.value, albums));
      }, 700);
    } else {
      setTimeout(() => {
        dispatch(clearFilter());
      }, 700);
    }
  };
  return (
    <form>
      <input
      className="filtered-input"
        type="text"
        placeholder="Search for a song..."
        onChange={setFilteredSongs}
      />
    </form>
  );
};

export default SongFilter;
