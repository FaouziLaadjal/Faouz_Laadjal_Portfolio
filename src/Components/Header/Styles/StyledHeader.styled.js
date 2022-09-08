import styled from "styled-components";
export const StyleHeader = styled.header`
  position: fixed;
  z-index: 999;
  background-color: var(--color-header);
  width: 100%;
  box-shadow: var(--shadow);
`;
export const Nav = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: 1em;
  }
  ul li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: var(--color-light);
    font-weight: 600;
  }
  a:hover {
    color: var(--color-primary);
  }
  .burger {
    display: none;
    font-size: 1.5em;
    color: var(--color-primary);
    cursor: pointer;
  }
  @media screen and (max-width: 68em) {
    ul {
      display: none;
    }
    .burger {
      display: block;
    }
  }
`;
export const Logo = styled.span`
  color: var(--color-primary);
  font-size: 2em;
`;
