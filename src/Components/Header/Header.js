import { StyleHeader, Nav, Logo } from "./Styles/StyledHeader.styled";

import { CgMenu } from "react-icons/cg";
export default function Header() {
  return (
    <StyleHeader className="container__wrapper">
      <div className="container">
        <Nav>
          <a href="./">
            <Logo>Laadjal Faouzi</Logo>
          </a>

          <ul id="navbarlinks" className="random">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#qualifications">QUALIFICATIONS</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <CgMenu id="navbtn" className="burger" />
        </Nav>
      </div>
    </StyleHeader>
  );
}
