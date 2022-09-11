import styled from "styled-components";
export const StyledExperience = styled.div`
  h2,
  h3 {
    color: var(--color-primary);
  }

  .svg {
    font-size: 2em;
    color: var(--color-primary);
  }
  .wrapper {
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  ul li {
    list-style: none;
  }
  .firstList {
    display: grid;
    grid-template-columns: 5em auto;
    background-color: #fff;
    padding: 1em;
    border: 1px solid var(--color-primary);
    box-shadow: var(--shadow);
    border-radius: 15px;
  }
  .secondlist li {
    list-style: square;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .place_date {
    display: flex;
    justify-content: space-between;
  }
  p {
    max-width: 75ch;
    line-height: 1.5em;
    color: var(--color-light);
  }
  @media screen and (max-width: 68em) {
    .firstList {
      background-color: #fff;
      padding: 1em;
      border: 1px solid var(--color-primary);
      box-shadow: var(--shadow);
    }
    .place_date {
      flex-direction: column;
      gap: 0.5em;
    }
    h2 {
      text-align: center;
    }
  }
`;
