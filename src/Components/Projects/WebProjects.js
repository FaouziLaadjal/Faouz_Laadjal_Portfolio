import projects from "../../data/ProjectsData";
import { StyledCard } from "./Styles/StyledCard.styled";
import { Button } from "../General/Styles/Button.styled";
import colors from "../../data/Colors";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function WebProjects() {
  return (
    <Splide
      options={{
        type: "loop",
        perpage: 1,
        autoplay: "true",
        interval: 3000,
        gap: "2em",
        padding: "2em",
        pagination: false,
      }}
      aria-label="My Front Web Projects"
    >
      {projects.map((item, index) => (
        <SplideSlide key={index}>
          <StyledCard>
            <h2>{item.title}</h2>
            <div className="imgContainer">
              <img src={`./images/${item.image}`} alt=""></img>
            </div>

            <div>
              <Button className="btn" bg={colors.Secondary}>
                <a href={`${item.link}`}>Website</a>
              </Button>
            </div>
          </StyledCard>
        </SplideSlide>
      ))}
    </Splide>
  );
}
