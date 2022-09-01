import { StyledCard } from "./Styles/StyledCard.styled";
export default function Card({ item: { id, title, body, image, link } }) {
  return (
    <StyledCard>
      <>
        <img src={`./images/${image}`} alt=""></img>
      </>
      <>
        <p>{body}</p>
      </>

      <>
        <a href={`${link}`}>Website</a>
      </>
    </StyledCard>
  );
}
