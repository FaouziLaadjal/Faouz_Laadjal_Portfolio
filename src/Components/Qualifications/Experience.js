import { StyledExperience } from "./Styles/StyledExperience.styled";
import { experience } from "../../data/QualificationsData";
import { FaBriefcase } from "react-icons/fa";
export default function ExperienceCard() {
  return (
    <StyledExperience>
      <h2>Experience</h2>
      <ul data-aos="zoom-in-down" data-aos-duration="1000" className="wrapper">
        {experience.map((item, index) => (
          <li className="firstList" key={index}>
            <FaBriefcase className="svg" />
            <div className="content">
              <h3>{item.title}</h3>
              <div className="place_date">
                <span>{item.place}</span>
                <span>{item.date}</span>
              </div>

              <p>{item.discription}</p>
              <ul className="secondlist">
                {item.skills.map((e, index) => (
                  <li key={index}>
                    <p>{e}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </StyledExperience>
  );
}
