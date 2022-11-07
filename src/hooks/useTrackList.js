import { useEffect, useState } from "react";
import tracksData from "../utils/data";

const INITIAL_STATE = {
  data: null,
  error: null,
  loading: true,
};
export default function useTrackList() {
  const [state, setState] = useState(
    INITIAL_STATE
  );

  useEffect(() => {
    let ignore = false;

    async function fetchTrackList() {
      const { data, error } = await tracksData();
      if (data) {
        setState({
          ...INITIAL_STATE,
          data,
          loading: false,
        });
      } else {
        setState({
          ...INITIAL_STATE,
          error,
          loading: false,
        });
      }
    }
    if (!ignore) fetchTrackList();
    return () => {
      ignore = true;
    };
  }, []);

  return { ...state };
}
