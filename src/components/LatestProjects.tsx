import ButtomComponents from "./ButtomComponents";

const LatestProjects = (props: {
  handleTurnPages: (direction: string) => void;
}) => {
  return (
    <>
      <div className="portfolio-box">
        <div className="img-box">
          <img src="images/Capture.PNG" alt="portfolio" />
        </div>
        <div className="info-box">
          <div className="info-title">
            <h3>Project Name</h3>
            <a href="">
              Live Preview <i className="bx bx-link-external"></i>
            </a>
          </div>
          <p>Tech Used:</p>
          <p style={{ textAlign: "justify" }}>
            ASL Sign Language Classification App This ASL Sign Language
            Classification App is a machine learning-powered web application
            developed with Flask, utilizing a Random Forest classifier to
            accurately recognize and classify American Sign Language signs.
            Built with a focus on intuitive usability.
          </p>
        </div>
        <div className="btn-box">
          <a
            href="https://github.com/poppatheduke/Sign-Language-App"
            className="btn"
          >
            Source Code
          </a>
          <a href="https://github.com/poppatheduke" className="btn">
            More Projects
          </a>
        </div>
      </div>

      <ButtomComponents number={5} handleTurnPages={props.handleTurnPages} />
    </>
  );
};

export default LatestProjects;
