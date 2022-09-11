import { CgPhone, CgMail } from "react-icons/cg";
import { StyledInfos } from "./Styles/StyledInfos.styled";
import SocialIcons from "../General/SocialIcons";
export default function Infos() {
  return (
    <StyledInfos>
      <h2 data-aos="fade-down-right" data-aos-duration="1000">
        Contact me
      </h2>
      <h3 data-aos="fade-down-right" data-aos-duration="1000">
        You wanna know more about me ?
      </h3>
      <p data-aos="fade-down-right" data-aos-duration="1000" className="text">
        Feel free to contact me in one of the following social media platforms.
      </p>
      <ul data-aos="fade-down-right" data-aos-duration="1000">
        <li>
          <a href="mailto:faouzi.laadjal99@gmail.com">
            <CgMail></CgMail>
            <p>faouzi.laadjal99@gmail.com</p>
          </a>
        </li>
        <li>
          <a href="tel:+213775458209">
            <CgPhone></CgPhone>
            <p>0775458209</p>
          </a>
        </li>
      </ul>
      <div
        data-aos="fade-down-right"
        data-aos-duration="1000"
        className="socials"
      >
        <SocialIcons />
      </div>
    </StyledInfos>
  );
}
