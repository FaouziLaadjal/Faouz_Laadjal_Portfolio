import { ContactStyled } from "./Styles/StyledContact.styled";
import Infos from "./Infos";
import Form from "./Form";

export default function Contact() {
  return (
    <ContactStyled className="container__wrapper" id="contact">
      <div className="container">
        <Infos />
        <Form />
      </div>
    </ContactStyled>
  );
}
