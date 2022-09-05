import styled from "styled-components";
export const StyledInfos = styled.div`
  ul li {
    list-style: none;
  }
  ul li a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.PrimaryColor};
  }
`;
