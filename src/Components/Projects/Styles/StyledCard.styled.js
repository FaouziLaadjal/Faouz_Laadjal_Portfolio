import styled from "styled-components";
export const StyledCard = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid hsla(225, 100%, 15%, 0.2);
  box-shadow: 0 0.2em 0.5em hsla(225, 100%, 15%, 0.2);
  flex-basis: 32%;
  background-color: #fff;
  img {
    width: 150px;
    height: 50px;
  }
  a {
    text-decoration: none;
    color: #00b388;
  }
`;
