import styled from "styled-components";
export const AutoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em;
  text-align: center;

  box-shadow: var(--shadow);
  background-color: #fff;
  margin: 2em 0;
  .vidContainer {
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  iframe {
    width: 720px;
    height: 400px;
    border-radius: 1em;
  }
  .text {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: center;
  }
  span {
    color: var(--color-primary);
    font-weight: bold;
  }
  p {
    color: var(--color-light);
  }
  @media screen and (max-width: 68em) {
    iframe {
      width: 100%;
      height: 100%;
    }
    .text {
      flex-direction: column;
    }
  }
`;
