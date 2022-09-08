import styled from "styled-components";
export const StyledExperience = styled.div`
  h2 {
    color: #00b388;
    font-size: 2em;
    font-weight: bold;
  }
  h3 {
    color: #00b388;
  }
  ul li {
    list-style: none;
    color: ${({ theme }) => theme.colors.Light};
    font-weight: 300;
  }
  .svg {
    font-size: 2em;
    color: #00b388;
  }
  .wrapper li {
    display: grid;
    grid-template-columns: auto auto;
    gap: 40px;
  }
  .place_date {
    display: flex;
    justify-content: space-between;
  }
  p {
    margin-top: 10px;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.Light};
  }
  span {
    color: #000;
    font-weight: 400;
    font-size: 1em;
  }
`;
