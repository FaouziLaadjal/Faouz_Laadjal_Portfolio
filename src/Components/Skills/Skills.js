import { Frontskills, Autoskills } from "../../data/Skills";
import SkillsCard from "./SkillsCard";
import { SkillsFlex } from "./Styles/SkillsFlex.styled";
export default function Skills() {
  return (
    <>
      <h1>You wanna know about my skills ?</h1>
      <SkillsFlex>
        <SkillsCard test={Frontskills} />
        <SkillsCard test={Autoskills} />
      </SkillsFlex>
    </>
  );
}
