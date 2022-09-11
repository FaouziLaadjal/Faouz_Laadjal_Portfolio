import { CardFlex } from "./Styles/CardFlex.styled";
import projects from "../../data/ProjectsData";
import ProjectCard from "./ProjectsCard";
export default function Projects() {
  return (
    <section className="container__wrapper" id="projects">
      <div className="container">
        <h2 className="heading">
          Let's see some of the projects that i'v worked on
        </h2>
        <CardFlex>
          {projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </CardFlex>
      </div>
    </section>
  );
}
