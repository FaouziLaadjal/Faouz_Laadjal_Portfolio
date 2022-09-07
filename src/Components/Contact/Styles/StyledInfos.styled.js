import styled from "styled-components";
export const StyledInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 48px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.PrimaryColor};
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    margin-bottom: 10px;
    list-style: none;
  }
  ul li a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.PrimaryColor};
  }
  p {
    margin: 0;
    padding: 0;
  }
  .text {
    max-width: 45ch;
    line-height: 1.5em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    text-align: center;
    ul li a {
      font-size: 16px;
      padding: 1em 2em;
      border: 1px solid;
      border-radius: 15px;
    }
  }
`;
