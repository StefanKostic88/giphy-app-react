import React from "react";

import {
  GifCardStyled,
  GifCardImageContainerStyled,
  GifCardContentStyled,
} from "./MainContentStyles/MainContentStyles";

const GifItem = ({ id, gifUrl, title, url }) => {
  return (
    <GifCardStyled>
      <GifCardImageContainerStyled>
        <img src={gifUrl} alt="nesto" />
      </GifCardImageContainerStyled>
      <GifCardContentStyled>{title}</GifCardContentStyled>
    </GifCardStyled>
  );
};

export default GifItem;
