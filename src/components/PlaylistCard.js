import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {
  return (
    <Link to={`/playlist/${playlist.title}`}>
      <div className="card bg-light">
        <h3 className="text-primary text-left">{playlist.title} </h3>
        <ul className="list">
          <li>
            <span className="bold-li">CreatedAt :</span> {playlist.createdAt}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default PlaylistCard;
