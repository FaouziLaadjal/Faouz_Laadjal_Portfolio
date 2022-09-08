import { Frontskills, Autoskills } from "../../data/Skills";
import { SkillsCardStyle } from "./Styles/SkillsCard.styled";

export default function SkillsCard(props) {
  if (props.test.title !== "Front End") {
    return (
      <SkillsCardStyle>
        <h2>{props.test.title}</h2>
        <h3>Languages</h3>
        <ul>
          {props.test.Languages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Softwares</h3>
        <ul>
          {props.test.Software.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </SkillsCardStyle>
    );
  }
  if (props.test.title === "Front End") {
    return (
      <SkillsCardStyle>
        <h2>{props.test.title}</h2>
        <h3>Languages</h3>
        <ul>
          {props.test.Languages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3>Frameworks</h3>
        <ul>
          {props.test.Frameworks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </SkillsCardStyle>
    );
  }
}
