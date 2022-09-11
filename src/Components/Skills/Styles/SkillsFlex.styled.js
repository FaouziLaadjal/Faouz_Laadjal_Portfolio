import styled from "styled-components";
export const SkillsFlex = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 68em) {
    flex-direction: column;
    gap: 4em;
    background: none;
  }
  background: url("images/skills.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 500px auto;
`;
