import styled from "styled-components";
export const CardFlex = styled.div`
  padding: 1em 1em;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1em;
  @media screen and (max-width: 68em) {
    display: flex;
    flex-direction: column;
  }
`;
