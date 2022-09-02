import styled from "styled-components";
export const SkillsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 0px;
  }
`;
