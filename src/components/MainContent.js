import React, { useEffect, useState } from "react";

import GifItem from "./GifItem";

import { generateData } from "../assets/helpers";

import { MainContentStyled } from "./MainContentStyles/MainContentStyles";
const API_KEY = "L5BM7L7mWHYNuH1qqjBLi9GNDeLa8n8d";
const MainContent = ({ gifData, searchInputValue }) => {
  const [filteredData, setFilteredData] = useState([]);

  const searchResponse = async (query) => {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}`
    );
    const { data } = await res.json();

    const newData = data.map((gif) => generateData(gif));

    setFilteredData(() => [...newData]);
  };

  useEffect(() => {
    setFilteredData(() => [...gifData]);
  }, [gifData]);

  useEffect(() => {
    searchResponse(searchInputValue);
    console.log(searchInputValue);
  }, [searchInputValue]);

  useEffect(() => {
    if (filteredData.length === 0) {
      setFilteredData(() => [...gifData]);
    }
  }, [filteredData]);

  return (
    <MainContentStyled>
      {filteredData.map((gif) => (
        <GifItem {...gif} key={gif.id} />
      ))}
    </MainContentStyled>
  );
};

export default MainContent;
