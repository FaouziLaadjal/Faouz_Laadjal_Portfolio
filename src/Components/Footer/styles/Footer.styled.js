import styled from "styled-components";
export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  margin-top: 48px;
  padding: 20px 0;
  text-align: center;
  span {
    margin: 0;
    color: white;
  }
`;
