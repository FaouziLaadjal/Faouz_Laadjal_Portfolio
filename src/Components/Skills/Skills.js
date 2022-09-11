import { Frontskills, Autoskills } from "../../data/Skills";
import SkillsCard from "./SkillsCard";
import { SkillsFlex } from "./Styles/SkillsFlex.styled";
export default function Skills() {
  return (
    <section id="skills" className="container__wrapper">
      <div className="container" >
        <h2 className="heading">You wanna know about my skills ?</h2>
        <SkillsFlex>
          <SkillsCard  test={Autoskills} />
          <SkillsCard test={Frontskills} />
        </SkillsFlex>
      </div>
    </section>
  );
}
