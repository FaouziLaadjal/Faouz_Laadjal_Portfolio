import styled from "styled-components";
export const ContactStyled = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
