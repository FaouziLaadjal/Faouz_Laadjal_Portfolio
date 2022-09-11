import projects from "../../data/ProjectsData";
import ProjectCard from "./ProjectsCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function SlideProjects() {
  return (
    <section className="container__wrapper" id="projects">
      <div
        className="container"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <h2 className="heading">Some of the projects that i have done</h2>
        <div className="flex">
          <Splide
            options={{
              type: "loop",
              perpage: 1,
              autoplay: "true",
              lazyload: "false",
              speed: "1000",
            }}
            aria-label="My Favorite Images"
          >
            {projects.map((item, index) => (
              <SplideSlide>
                <ProjectCard key={index} item={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
