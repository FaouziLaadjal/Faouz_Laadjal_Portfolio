import styled from "styled-components";
export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  h2 {
    color: var(--color-primary);
    font-size: 3em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.4em;
    font-weight: bold;
  }
  p {
    max-width: 45ch;
    line-height: 1.5;
    font-weight: 300;
    font-size: 1.2em;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    display: flex;
    color: var(--color-primary);
    font-weight: bold;
    text-decoration: none;
    gap: 1em;
    align-items: center;
    font-size: 1.1em;
  }
  @media screen and (max-width: 68em) {
    text-align: center;
    ul li a {
      border: 1px solid;
      box-shadow: var(--shadow);
      padding: 1em;
    }
    ul li {
      padding: 1em;
    }
    .socials {
      display: flex;
      justify-content: center;
    }
  }
`;
