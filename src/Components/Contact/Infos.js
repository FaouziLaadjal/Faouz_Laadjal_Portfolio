import { CgPhone, CgMail } from "react-icons/cg";
import { StyledInfos } from "./Styles/StyledInfos.styled";
import SocialIcons from "../General/SocialIcons";
export default function Infos() {
  return (
    <StyledInfos>
      <h2>Contact me</h2>
      <p>
        Feel free to contact me in one of the following social media platforms.
      </p>
      <ul>
        <li>
          <a href="mailto:faouzi.laadjal99@gmail.com">
            <CgMail></CgMail>
            <p>faouzi.laadjal99@gmail.com</p>
          </a>
        </li>
        <li>
          <a>
            <CgPhone></CgPhone>
            <p>0775458209</p>
          </a>
        </li>
      </ul>
      <SocialIcons />
    </StyledInfos>
  );
}
