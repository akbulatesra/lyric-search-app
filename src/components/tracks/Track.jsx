import React from "react";
import { Link } from "react-router-dom";

function Track(props) {
  const { track } = props;
  return (
    <div>
      <h5>{track.artist_name}</h5>
      <p>
        <strong>Track: </strong>
        {track.track_name}
        <br />
        <strong>Album: </strong>
        {track.album_name}
      </p>
      <Link to={`lyrics/track/${track.track_id}`}>
        View Lyrics
      </Link>
    </div>
  );
}

export default Track;
