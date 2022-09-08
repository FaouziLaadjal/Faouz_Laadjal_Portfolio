import { StyledExperience } from "./Styles/StyledExperience.styled";
import { experience } from "../../data/QualificationsData";
import { FaBriefcase } from "react-icons/fa";
export default function ExperienceCard() {
  return (
    <StyledExperience>
      <h2>Experience</h2>
      <ul className="wrapper">
        {experience.map((item, index) => (
          <li key={index}>
            <FaBriefcase className="svg" />
            <div>
              <h3>{item.title}</h3>
              <div className="place_date">
                <span >{item.place}</span>
                <span>{item.date}</span>
              </div>

              <p>{item.discription}</p>
              <ul>
                {item.skills.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </StyledExperience>
  );
}
