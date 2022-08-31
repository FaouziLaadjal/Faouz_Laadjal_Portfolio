import {
  StyleHeader,
  Nav,
  Logo,
  Links,
  Image,
} from "./Styles/StyledHeader.styled";
import colors from "./Colors";
import { Container } from "./Styles/Conatiner.styled";
import { Flex } from "./Styles/Flex.styled";
import { Button } from "./Styles/Button.styled";
import SocialIcons from "./SocialIcons";
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
        "Développeur Front End.",
        "Programmeur PLC SIEMENS.",
        "HMI / SCADA Designer.",
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
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </Links>
          <MenuButton />
        </Nav>
        <Flex>
          <div>
            <span className="test">Je Suis Un </span>
            <span ref={el}></span>
            <p>
              Je me présente Faouzi 24 un étudiant hautement motivé et passionné
              par l'automatisation des process et développeur Web Front End sur
              mon temps libre. Cherche toujours à acquérir de nouvelles
              connaissances et à développer mes compétences , Forte envie et
              grande détermination de réussir dans mon domaine de travail.
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
