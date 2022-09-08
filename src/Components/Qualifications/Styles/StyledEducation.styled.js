import styled from "styled-components";
export const StyledEducation = styled.div`
  h2,
  h3 {
    color: var(--color-primary);
  }

  .svg {
    font-size: 2.5em;
    color: var(--color-primary);
  }
  ul {
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  ul li {
    display: grid;
    grid-template-columns: 5em auto;
    background-color: #fff;
    padding: 1em;
    border: 1px solid var(--color-primary);
    box-shadow: var(--shadow);
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .date_place {
    display: flex;
    justify-content: space-between;
  }
  p {
    color: var(--color-light);
  }
  @media screen and (max-width: 68em) {
    ul li {
      background-color: #fff;
      padding: 1em;
      border: 1px solid var(--color-primary);
      box-shadow: var(--shadow);
    }
    .content {
      display: block;
    }
    .date {
      font-size: 0.8em;
    }
    .date_place {
      flex-direction: column;
      gap: 0.5em;
    }
    h2 {
      text-align: center;
    }
  }
`;
