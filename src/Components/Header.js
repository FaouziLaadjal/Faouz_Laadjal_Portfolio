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
export default function Header() {
  return (
    <StyleHeader>
      <Container>
        <Nav>
          <Logo>Laadjal Faouzi</Logo>
          <Links>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT ME</a>
            </li>
            <li>
              <a href="">SKILLS</a>
            </li>
            <li>
              <a href="">PROJECTS</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </Links>
        </Nav>
        <Flex>
          <div>
            <h1>DÉVELOPPEUR FRONT-END </h1>
            <h1>PROGRAMMEUR PLC SIEMENS</h1>
            <h1>HMI & SCADA DESIGNER.</h1>
            <p>
              Je me présente je m'appelle Faouzi 23 ans étudiant master 2
              Automatisation Industries et Process a USTHB, Étudiant hautement
              motivé et passionné par l'automatisation des processus et
              développeur Web Front End sur mon temps libre. Cherche toujours à
              acquérir de nouvelles connaissances et à développer mes
              compétences , Forte envie et grande détermination de réussir dans
              mon domaine de travail. La programmation d'automates SIEMENS et le
              développement d'écrans SCADA & IHM sont mes points forts.
            </p>
            <Flex>
              <Button bg={colors.Primary}>Contact Me</Button>
              <SocialIcons />
            </Flex>
          </div>
          <Image src="images/header.png" />
        </Flex>
      </Container>
    </StyleHeader>
  );
}
