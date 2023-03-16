// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { MainAppContainer } from "./AppStyle";

import MainContent from "./components/MainContent";
import Header from "./components/Header/Header";
import SeacrSection from "./components/SeacrSection/SeacrSection";

import GifContext from "./context/gifyContext";

import { generateData } from "./assets/helpers.js";

const API_KEY = "L5BM7L7mWHYNuH1qqjBLi9GNDeLa8n8d";

console.log(API_KEY);

// api_key=L5BM7L7mWHYNuH1qqjBLi9GNDeLa8n8d&q=hamburger&limit=25&offset=0&rating=g&lang=en

function App() {
  const [gifData, setGifData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const getData = async () => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
    );
    const { data } = await (await res).json();
    const newData = data.map((el) => generateData(el));

    setGifData(() => newData);
  };

  const searchHandler = (e) => {
    setSearchInputValue(() => e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <GifContext.Provider value={{ gifArray: [...gifData] }}>
        <SeacrSection onSearchHandler={searchHandler} />
        <MainAppContainer>
          <MainContent gifData={gifData} searchInputValue={searchInputValue} />
        </MainAppContainer>
      </GifContext.Provider>
    </div>
  );
}

export default App;

// id images.original.url, title, url

// "https://giphy.com/gifs/mls-stl-st-louis-city-sc-stlcitysc-iMHtpBdtu6sAPe7OWy"
// https://media1.giphy.com/media/iMHtpBdtu6sAPe7OWy/giphy.gif?cid=43cc4495rhk3iwkt17sod0tctm5ygsb2qlcletegmslrt7qi&rid=giphy.gif&ct=g

// "Tired St Louis GIF by Major League Soccer"
