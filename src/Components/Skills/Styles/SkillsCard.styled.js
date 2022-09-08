import styled from "styled-components";
export const SkillsCardStyle = styled.div`
  border-radius: 15px;
  background-color: #fff;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  padding: 2em 3em;
  text-align: center;
  ul {
    display: flex;
    flex-direction: column;
  }
  h2 {
    border-radius: 15px;
    padding: 1em 2em;
    box-shadow: 5px 5px 5px 2px var(--color-primary);
    margin-bottom: 1em;
  }
  h3 {
    color: var(--color-light);
  }
  li {
    list-style: none;
    color: var(--color-primary);
  }
`;
