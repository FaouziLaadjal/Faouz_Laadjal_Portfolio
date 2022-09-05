import styled from "styled-components";
export const StyledCard = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  align-items: center;
  border-radius: 15px;

  box-shadow: 0 3px 1px -2px #00b388, 0 2px 2px 0 #00b388, 0 1px 5px 0 #00b388;
  flex-basis: 32%;
  img {
    width: 150px;
    height: 50px;
  }
  a {
    text-decoration: none;
    color: #00b388;
  }
`;
