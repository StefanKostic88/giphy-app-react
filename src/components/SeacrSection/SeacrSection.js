import React from "react";
import { SearchSectionStyled } from "./SearchSectionStyles";

const SeacrSection = ({ onSearchHandler }) => {
  return (
    <SearchSectionStyled>
      <h2>Search Giphy</h2>
      <input type="text" onChange={(e) => onSearchHandler(e)} />
    </SearchSectionStyled>
  );
};

export default SeacrSection;
