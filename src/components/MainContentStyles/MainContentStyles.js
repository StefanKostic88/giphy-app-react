import styled from "styled-components";
export const MainContentStyled = styled.main`
  display: flex;
  width: 1200px;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GifCardStyled = styled.figure`
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  max-width: 320px;
  background-color: #f5f5f5;
  border-radius: 3px;
`;

export const GifCardImageContainerStyled = styled.div`
  height: 150px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const GifCardContentStyled = styled.div`
  text-align: center;
  padding-top: 1rem;
`;
