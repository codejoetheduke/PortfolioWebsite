import ButtomComponents from "./ButtomComponents";

const LatestProjects = (props: {
  handleTurnPages: (direction: string) => void;
}) => {
  return (
    <>
      <div className="portfolio-box">
        <div className="img-box">
          <img src="images/wetube.PNG" alt="portfolio" />
        </div>
        <div className="info-box">
          <div className="info-title">
            <h3>Project Name</h3>
            <a href="https://wetubegh.netlify.app/">
              Live Preview <i className="bx bx-link-external"></i>
            </a>
          </div>
          <p>Tech Used:</p>
          <p style={{ textAlign: "justify" }}>
            A YouTube Clone application using React, MaterialUI, and RapidAPI to
            integrate YouTube's data API. This project aimed to replicate the
            core features of YouTube, offering users an intuitive and engaging
            video browsing experience. By leveraging MaterialUI, I ensured a
            clean and responsive design that aligns with modern UI/UX standards.
          </p>
        </div>
        <div className="btn-box">
          <a href="https://github.com/codejoetheduke/WeTube" className="btn">
            Source Code
          </a>
          <a href="https://github.com/codejoetheduke" className="btn">
            More Projects
          </a>
        </div>
      </div>

      <ButtomComponents number={5} handleTurnPages={props.handleTurnPages} />
    </>
  );
};

export default LatestProjects;
