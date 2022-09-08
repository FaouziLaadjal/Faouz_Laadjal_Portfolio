import styled from "styled-components";
export const StyledEducation = styled.div`
  h2 {
    color: #00b388;
    font-weight: bold;
    font-size: 2em;
  }
  ul {
    padding: 0;
  }
  ul li {
    width: 100%;
    display: grid;
    grid-template-columns: 70px auto;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.1em;
  }

  svg {
    font-size: 40px;
    color: #00b388;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .date {
    font-weight: 300;
    font-size: 0.9em;
  }
  p,
  li {
    font-weight: 300;
    margin-top: 10px;
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.Light};
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul li {
      padding: 1em;
      border: 1px solid hsla(225, 100%, 15%, 0.2);
      box-shadow: 0 0.2em 0.5em hsla(225, 100%, 15%, 0.2);
      border-radius: 15px;
      margin-bottom: 20px;
      display: block;
    }
    .content {
      display: block;
    }
  }
`;
