import { StyledEducation } from "./Styles/StyledEducation.styled";
import { education } from "../../data/QualificationsData";
import { MdSchool } from "react-icons/md";
export default function EducationCard() {
  return (
    <StyledEducation>
      <h2>Education</h2>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <MdSchool className="svg" />
            <div className="content">
              <h3>{item.title}</h3>
              <div className="date_place">
                <span>{item.place}</span>
                <span>{item.date}</span>
              </div>
              <p>{item.discription}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledEducation>
  );
}
