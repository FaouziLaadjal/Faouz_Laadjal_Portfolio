import styled from "styled-components";
export const CardFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
