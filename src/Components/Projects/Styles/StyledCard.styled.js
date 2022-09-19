import styled from "styled-components";
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  text-align: center;

  box-shadow: var(--shadow);
  background-color: #fff;
  margin: 2em 0;
  .imgContainer {
    width: 100%;
  }
  .imgContainer img {
    max-width: 100%;
    border-radius: 15px;
  }
  a {
    text-decoration: none;
    color: #00b388;
  }
  .btn {
    margin-bottom: 2em;
  }
  @media screen and (max-width: 68em) {
  }
`;
