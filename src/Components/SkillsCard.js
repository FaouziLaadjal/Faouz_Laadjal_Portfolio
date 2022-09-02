import { Frontskills, Autoskills } from "../data/Skills";
import { SkillsCardStyle } from "./Styles/SkillsCard.styled";

export default function SkillsCard(props) {
  if (props.test.title !== "Front End") {
    return (
      <SkillsCardStyle>
        <h2>{props.test.title}</h2>
        <h3>Languages</h3>
        {props.test.Languages.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
        <h3>Softwares</h3>
        {props.test.Software.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </SkillsCardStyle>
    );
  }
  if (props.test.title === "Front End") {
    return (
      <SkillsCardStyle>
        <h2>{props.test.title}</h2>
        <h3>Languages</h3>
        {props.test.Languages.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
        <h3>Frameworks</h3>
        {props.test.Frameworks.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </SkillsCardStyle>
    );
  }
}
