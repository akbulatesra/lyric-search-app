import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import tracksData from "../utils/data";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [trackList, setTrackList] = useState([]);

  // useEffect(() => {
  //   let ignore = false;

  //   async function fetchTrackList() {
  //     const { data, error } = await tracksData();
  //     if (data) setTrackList(data);
  //   }
  //   if (!ignore) fetchTrackList();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  const heading = "Top 10 Tracks";
  // const values = {
  //   trackList,
  //   setTrackList,
  //   heading,
  // };
  return (
    <Context.Provider value={heading}>
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => {
  const ctx = useContext(Context);
  if (!ctx) {
    throw Error("context error");
  }

  return ctx;
};
