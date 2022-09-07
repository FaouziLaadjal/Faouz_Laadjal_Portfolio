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
            <div>
              <div className="content">
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.place}</span>
                </div>
                <div>
                  <span className="date">{item.date}</span>
                </div>
              </div>
              <p>{item.discription}</p>
            </div>
          </li>
        ))}
      </ul>
    </StyledEducation>
  );
}
