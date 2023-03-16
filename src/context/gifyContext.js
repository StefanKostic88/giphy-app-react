import { createContext } from "react";
// const API_KEY = "L5BM7L7mWHYNuH1qqjBLi9GNDeLa8n8d";

// const generateData = ({
//   id,
//   images: {
//     original: { url: gifUrl },
//   },
//   title,
//   url,
// }) => ({
//   id,
//   gifUrl,
//   title,
//   url,
// });

// const getData = async () => {
//   const res = await fetch(
//     `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
//   );
//   const { data } = await res.json();
//   const newData = data.map((el) => generateData(el));

//   return newData;
// };

const GifContext = createContext({
  gifArray: [],
});

export default GifContext;
