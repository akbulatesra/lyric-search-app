import { useMyContext } from "../../context/context";
import useTrackList from "../../hooks/useTrackList";
import Spinner from "../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
  const heading = useMyContext();
  const { data, loading, error } = useTrackList();
  console.log({ data, loading, error });
  if (data === null) {
    return <Spinner />;
  } else {
    console.log(data[0].track);
    return (
      <>
        <h3>{heading}</h3>
        {data.map((item) => (
          <Track
            key={item.track.track_id}
            track={item.track}
          />
        ))}
      </>
    );
  }
};

export default Tracks;
