import styled from "styled-components";
export const StyledMain = styled.main`
  height: 100vh;
  background-color: var(--color-header);
  .container {
    padding: 15em 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-image: url(/images/header.png);
    background-repeat: no-repeat;
    background-position: center right;
  }
  .container p {
    max-width: 70ch;
    line-height: 1.5em;
    color: var(--color-light);
  }
  .test {
    color: var(--color-primary);
  }
  .contact {
    display: flex;
    align-content: center;
  }
  @media screen and (max-width: 68em) {
    .container {
      padding-top: 10em;
      background-image: none;
    }
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
    .socials {
      display: flex;
      justify-content: center;
      margin-top: 1em;
    }
  }
`;

export const Image = styled.img``;
