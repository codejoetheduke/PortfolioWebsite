import { input } from "../assets/constant";
import ButtomComponents from "./ButtomComponents";

const ContactMe = (props: { handleTurnPages: (direction: string) => void }) => {
  return (
    <>
      <div className="contact-box">
        <form action="">
          {input.map((content, index) => (
            <input
              key={index}
              type={content.type}
              className="field"
              name=""
              id=""
              placeholder={content.placeholder}
              required
            />
          ))}
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="field"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" className="btn" value="Send Message" />
        </form>
      </div>
      <ButtomComponents number={6} handleTurnPages={props.handleTurnPages} />
      <a href="" className="back-profile">
        <p>Profile</p>
        <i className="bx bxs-user"></i>
      </a>
    </>
  );
};

export default ContactMe;
