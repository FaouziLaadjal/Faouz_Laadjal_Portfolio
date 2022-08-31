import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  span {
    font-size: 3em;
    color: ${({ theme }) => theme.colors.PrimaryColor};
  }
`;
