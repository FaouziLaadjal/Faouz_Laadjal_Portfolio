import styled from "styled-components";
export const StyledCard = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: var(--shadow);

  background-color: #fff;
  img {
    width: 9em;
    height: 3em;
  }
  a {
    text-decoration: none;
    color: #00b388;
  }
`;
