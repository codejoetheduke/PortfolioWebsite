import WorkEducation from "./WorkEducation";
import { education } from "../assets/constant";
import ButtomComponents from "./ButtomComponents";

const Education = (props: { handleTurnPages: (direction: string) => void }) => {
  return (
    <>
      <div className="workeduc-box">
        {education.map((content, index) => (
          <WorkEducation
            year={content.year}
            h3={content.h3}
            p={content.p}
            key={index}
          />
        ))}
      </div>
      <ButtomComponents number={2} handleTurnPages={props.handleTurnPages} />
    </>
  );
};

export default Education;
