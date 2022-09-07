import { StyledForm } from "./Styles/Form.styled";
import { Button } from "../General/Styles/Button.styled";
import colors from "../../data/Colors";
export default function Form() {
  return (
    <StyledForm>
      <div className="flex">
        <div className="Inputs">
          <label htmlFor="">Nom</label>
          <input type="text" placeholder="Nom" />
        </div>
        <div className="Inputs">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="exemple@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="">Message</label>
        <textarea className="textArea" type="text" placeholder="Your Message" />
      </div>
      <Button bg={colors.Primary}>Send</Button>
    </StyledForm>
  );
}
