import styled from "styled-components";
export const ContactStyled = styled.section`
  padding: 1em;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  @media screen and (max-width: 68em) {
    .container {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  }
`;
