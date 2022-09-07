import { ContactStyled } from "./Styles/StyledContact.styled";
import Infos from "./Infos";
import Form from "./Form";

export default function Contact() {
  return (
    <ContactStyled>
      <Infos />
      <Form />
    </ContactStyled>
  );
}
