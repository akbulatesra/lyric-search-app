import { useMyContext } from "../../context/context";

const Tracks = () => {
  const values = useMyContext();

  return <div>{values.heading}</div>;
};

export default Tracks;
