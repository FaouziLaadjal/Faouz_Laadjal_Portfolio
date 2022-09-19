import WebProjects from "./WebProjects";
import AutoProjects from "./AutoProjects";

export default function Projects() {
  return (
    <section className="Container__wrapper">
      <h2 className="heading">Some of the projects that i have done</h2>
      <div className="splide">
        <WebProjects />
      </div>

      <div className="splide">
        <AutoProjects />
      </div>
    </section>
  );
}
