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
    .burger {
      display: block;
      z-index: 99999;
    }
    .show {
      display: inline-block;
    }
    .hide {
      display: none;
    }
    #navbarlinks {
      inset: 0 0 0 50%;
      position: fixed;
      z-index: 999;
      background: hsl(0 0% 0%/0.1);
      backdrop-filter: blur(0.9em);
      height: 100vh;
      padding: 5em 1em;
      text-align: center;
    }
    #navbarlinks li {
      padding: 1em;
      margin-bottom: 1em;
    }
  }
`;
export const Logo = styled.span`
  color: var(--color-primary);
  font-size: 2em;
  @media screen and (max-width: 68em) {
    font-size: 1.5em;
  }
`;
