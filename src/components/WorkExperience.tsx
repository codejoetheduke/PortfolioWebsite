import WorkEducation from "./WorkEducation";
import { workContent } from "../assets/constant";
import ButtomComponents from "./ButtomComponents";

const WorkExperience = (props: {
  handleTurnPages: (direction: string) => void;
}) => {
  return (
    <>
      <div className="workeduc-box">
        {workContent.map((content, index) => (
          <WorkEducation
            year={content.year}
            h3={content.h3}
            p={content.p}
            key={index}
          />
        ))}
      </div>
      <ButtomComponents number={1} handleTurnPages={props.handleTurnPages} />
    </>
  );
};

export default WorkExperience;
