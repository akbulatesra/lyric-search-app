import axios from "axios";
const REACT_MM_KEY =
  "b64921a21ddc5b0e4f3c3412ab9bbbff";

const tracksData = async () => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=tr&f_has_lyrics=1&apikey=${REACT_MM_KEY}`;
  await axios
    .get(url)
    .then((res) => ({
      data: res.data,
      error: null,
    }))
    .catch((error) => ({
      error: error.message,
      data: null,
    }));
};

export default tracksData;
