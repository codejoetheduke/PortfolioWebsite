import ButtomComponents from "./ButtomComponents";

const LatestProjects = (props: {
  handleTurnPages: (direction: string) => void;
}) => {
  return (
    <>
      <div className="portfolio-box">
        <div className="img-box">
          <img src="images/portfolio.png" alt="portfolio" />
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
            An innovative web application that enhances user engagement through
            interactive features. This project focuses on delivering a seamless
            user experience, showcasing my ability to integrate advanced
            technologies and design principles effectively.
          </p>
        </div>
        <div className="btn-box">
          <a href="https://github.com/poppatheduke" className="btn">
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
