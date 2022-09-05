import { StyledCard } from "./Styles/StyledCard.styled";
import { Button } from "../General/Styles/Button.styled";
import colors from "../../data/Colors";
export default function ProjectsCard({
  item: { id, title, body, image, link },
}) {
  return (
    <StyledCard>
      <img src={`./images/${image}`} alt=""></img>
      <p>{body}</p>
      <Button bg={colors.Secondary}>
        <a href={`${link}`}>Website</a>
      </Button>
    </StyledCard>
  );
}
