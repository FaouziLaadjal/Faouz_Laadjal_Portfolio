import styled from "styled-components";
export const MenuStyle = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;
