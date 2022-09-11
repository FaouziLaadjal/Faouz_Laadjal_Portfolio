import { StyledCard } from "./Styles/StyledCard.styled";
import { Button } from "../General/Styles/Button.styled";
import colors from "../../data/Colors";
export default function ProjectsCard({
  item: { id, title, body, image, link },
}) {
  return (
    <StyledCard >
      <h2>{title}</h2>
      <div className="imgContainer">
        <img src={`./images/${image}`} alt=""></img>
      </div>

      <div>
        <Button className="btn" bg={colors.Secondary}>
          <a href={`${link}`}>Website</a>
        </Button>
      </div>
    </StyledCard>
  );
}
