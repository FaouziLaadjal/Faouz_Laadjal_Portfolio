import styled from "styled-components";
export const StyledCard = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  text-align: center;
  border-radius: 15px;
  box-shadow: var(--shadow);
  background-color: #fff;
  .imgContainer {
    padding: 0 13em;
  }
  .imgContainer img {
    width: 100%;
    object-fit: cover;
    max-height: 378px;
  }
  a {
    text-decoration: none;
    color: #00b388;
  }
  .btn {
    margin-bottom: 2em;
  }
  @media screen and (max-width: 68em) {
    min-height: 386px;
    .imgContainer {
      padding: 0;
    }
    .imgContainer img {
      max-height: 180px;
    }
  }
`;
