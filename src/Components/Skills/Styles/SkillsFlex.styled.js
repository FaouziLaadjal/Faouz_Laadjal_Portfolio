import styled from "styled-components";
export const SkillsFlex = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 68em) {
    flex-direction: column;
    gap: 4em;
  }
`;
