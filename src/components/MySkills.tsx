import { skillsContent } from "../assets/constant";
import ButtomComponents from "./ButtomComponents";

const MySkills = (props: { handleTurnPages: (direction: string) => void }) => {
  return (
    <>
      <div className="skills-box">
        {skillsContent.map((content, index) => (
          <div className="skills-content" key={index}>
            <h3 key={index}>{content.h3}</h3>
            <div className="content">
              {content.skills.map((skill, skillIndex) => (
                <span key={skillIndex}>
                  <i className={skill.icon}></i>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ButtomComponents number={4} handleTurnPages={props.handleTurnPages} />
    </>
  );
};

export default MySkills;
