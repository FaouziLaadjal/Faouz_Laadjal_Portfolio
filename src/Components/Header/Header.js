import {
  StyleHeader,
  Nav,
  Logo,
  Links,
  Image,
} from "./Styles/StyledHeader.styled";
import colors from "../../data/Colors";
import { Container } from "../General/Styles/Conatiner.styled";
import { Flex } from "../General/Styles/Flex.styled";
import { Button } from "../General/Styles/Button.styled";
import SocialIcons from "../General/SocialIcons";
import MenuButton from "./MenuButton";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
export default function Header() {
  //Create Ref Element
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Front End Developer.",
        "PLC SIEMENS Programmer.",
        "HMI and SCADA Designer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <StyleHeader>
      <Container>
        <Nav>
          <Logo>Laadjal Faouzi</Logo>
          <Links>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT ME</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </Links>
          <MenuButton />
        </Nav>
        <Flex>
          <div>
            <span className="test">I'am a </span>
            <span ref={el}></span>
            <p>
              A highly motivated and passionate Industry & Process Automation
              student. Front-End Web developer on my free time. always seeks to
              acquire new knowledge and develop my skills, Strong desire and big
              determination to succeed in my field of work.
            </p>
            <Flex>
              <Button bg={colors.Primary}>Contact Me</Button>
              <Button bg={colors.Primary}>Download My CV</Button>
              <SocialIcons />
            </Flex>
          </div>
          <Image src="images/header.png" />
        </Flex>
      </Container>
    </StyleHeader>
  );
}
