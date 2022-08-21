import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocial } from "./Styles/Social.styled";
export default function SocialIcons() {
  return (
    <StyledSocial>
      <li>
        <a href="https://github.com/FaouziLaadjal">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/faouzilaadjal/">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/fou.zii.92/">
          <FaFacebook />
        </a>
      </li>
    </StyledSocial>
  );
}
