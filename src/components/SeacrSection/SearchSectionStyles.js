import styled from "styled-components";

export const SearchSectionStyled = styled.div`
  width: 1200px;

  margin: 1rem auto;
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border: none;
    outline: none;
    box-shadow: 0 0 0 1px black;
    border-radius: 2px;
    &:focus {
      box-shadow: 0 0 15px 1px #202078;
    }
  }
`;
