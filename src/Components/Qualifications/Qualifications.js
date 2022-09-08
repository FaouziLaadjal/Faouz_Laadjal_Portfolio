import ExperienceCard from "./Experience";
import EducationCard from "./Education";
export default function Qualifications() {
  return (
    <section id="qualifications" className="container__wrapper">
      <div className="container">
        <h2 className="heading ">Summary of my Qualifications</h2>
        <EducationCard />
        <ExperienceCard />
      </div>
    </section>
  );
}
