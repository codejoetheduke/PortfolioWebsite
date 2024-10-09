import { myServices } from "../assets/constant";
import ButtomComponents from "./ButtomComponents";

const MyServices = (props: {
  handleTurnPages: (direction: string) => void;
}) => {
  return (
    <>
      <div className="services-box">
        {myServices.map((content, index) => (
          <div className="services-content" key={index}>
            <i className={content.i}></i>
            <h3>{content.h3}</h3>
            <p>{content.p}</p>
            <a href="" className="btn">
              Read More
            </a>
          </div>
        ))}
      </div>
      <ButtomComponents number={3} handleTurnPages={props.handleTurnPages} />
    </>
  );
};

export default MyServices;
