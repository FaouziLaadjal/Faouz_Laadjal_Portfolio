import styled from "styled-components";
export const StyleHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 5px 0;
  height: 100vh;
  h1 {
    line-height: 0.5em;
    font-weight: 400;
  }
  p {
    color: ${({ theme }) => theme.colors.Light};
    line-height: 1.6em;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;
export const Logo = styled.span`
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.PrimaryColor};
`;
export const Links = styled.ul`
  font-size: 0.9em;
  list-style: none;
  display: flex;
  gap: 2em;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Light};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.PrimaryColor};
  }
`;
export const Image = styled.img`
  width: 450px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px 0px;
  }
`;
