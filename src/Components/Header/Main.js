import { StyledMain } from "./Styles/StyledMain";
import { Button } from "../General/Styles/Button.styled";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import SocialIcons from "../General/SocialIcons";

export default function Home() {
  //Create Ref Element
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Front End Developer.",
        "PLC SIEMENS Programmer.",
        "HMI and SCADA Designer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <StyledMain id="home" className="container__wrapper">
      <div className="container">
        <h1>
          <span>I'am a </span>
          <span className="test" ref={el}></span>
        </h1>

        <p>
          A highly motivated and passionate Industry & Process Automation
          student. Front-End Web developer on my free time. always seeks to
          acquire new knowledge and develop my skills, Strong desire and big
          determination to succeed in my field of work.
        </p>
        <div className="contact">
          <a href="#form">
            <Button bg="var(--color-primary)">Contact Me</Button>
          </a>
          <a href="CV.pdf" download={"Laadjal Faouzi CV"}>
            <Button bg="var(--color-primary)">Download My CV</Button>
          </a>
        </div>
      </div>
    </StyledMain>
  );
}
