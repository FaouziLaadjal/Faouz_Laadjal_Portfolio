import { StyledCard } from "./Styles/StyledCard.styled";
import { Button } from "../General/Styles/Button.styled";
import colors from "../../data/Colors";
export default function ProjectsCard({
  item: { id, title, body, image, link },
}) {
  return (
    <StyledCard data-aos="zoom-out-down" data-aos-duration="1000">
      <img src={`./images/${image}`} alt=""></img>
      <p>{body}</p>
      <Button bg={colors.Secondary}>
        <a href={`${link}`}>Website</a>
      </Button>
    </StyledCard>
  );
}
