import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSongs, getAlbums } from "../actions";

const ButtonSwitch = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
    dispatch(getAlbums());
  }, []);

  return (
    <div className="header">
      <Link to="/songs">
        <button>Songs</button>
      </Link>
      <Link to="/playlist">
        <button>Playlists</button>
      </Link>
    </div>
  );
};

export default ButtonSwitch;
