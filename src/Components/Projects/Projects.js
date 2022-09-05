import { CardFlex } from "./Styles/CardFlex.styled";
import projects from "../../data/ProjectsData";
import ProjectCard from "./ProjectsCard";
export default function Projects() {
  return (
    <>
      <h1> Let's see some of the projects that i'v worked on</h1>
      <CardFlex>
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </CardFlex>
    </>
  );
}
