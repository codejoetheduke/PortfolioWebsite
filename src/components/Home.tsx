import "../home.css";
import ProfilePage from "./ProfilePage";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import MyServices from "./MyService";
import MySkills from "./MySkills";
import Title from "./Title";
import LatestProjects from "./LatestProjects";
import ContactMe from "./ContactMe";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageZIndex, setPageZIndex] = useState([20, 19, 18]); // Track z-index of each page

  // Function to handle turning pages
  const handleTurnPages = (direction: string) => {
    if (direction === "next" && currentPage <= 6) {
      const newPage = currentPage + 1;
      console.log(newPage);
      // Change zIndex for new page
      setTimeout(() => {
        setPageZIndex((prevZIndex) =>
          prevZIndex.map((z, idx) => (idx === newPage - 1 ? 20 + idx : z))
        );
      }, 500);

      setCurrentPage(newPage);
    } else if (direction === "prev" && currentPage > 0) {
      const newPage = currentPage - 1;
      console.log(newPage);
      // Change zIndex for previous page
      setTimeout(() => {
        setPageZIndex((prevZIndex) =>
          prevZIndex.map((z, idx) => (idx === newPage - 1 ? 20 - idx : z))
        );
      }, 500);

      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className="home">
        <div className="wrapper">
          <div className="cover cover-left"></div>
          <div className="cover cover-right turn"></div>
          <div className="book">
            <div className="book-page page-left">
              {/* profile page */}
              <ProfilePage />
            </div>
            <div
              className={`book-page page-right ${
                currentPage > 0 ? "turn" : ""
              }`}
              id="turn 1"
              style={{ zIndex: pageZIndex[0] }}
            >
              {/* page 1 (work experience) */}
              <div className="page-front">
                <Title heading="Work Experience" />
                <WorkExperience handleTurnPages={handleTurnPages} />
              </div>
              {/* page 2 (education) */}
              <div className="page-back">
                <Title heading="Education" />
                <Education handleTurnPages={handleTurnPages} />
              </div>
            </div>
            <div
              className={`book-page page-right  ${
                currentPage > 2 ? "turn" : ""
              }`}
              id="turn 2"
              style={{ zIndex: pageZIndex[1] }}
            >
              {/* page 3 (my services) */}
              <div className="page-front">
                <Title heading="My Services" />
                <MyServices handleTurnPages={handleTurnPages} />
              </div>
              {/* page 4 (my skills) */}
              <div className="page-back">
                <Title heading="My Skills" />
                <MySkills handleTurnPages={handleTurnPages} />
              </div>
            </div>
            <div
              className={`book-page page-right ${
                currentPage > 4 ? "turn" : ""
              }`}
              id="turn 3"
              style={{ zIndex: pageZIndex[2] }}
            >
              {/* page 5 (my services) */}
              <div className="page-front">
                <Title heading="Latest Projects" />
                <LatestProjects handleTurnPages={handleTurnPages} />
              </div>
              {/* page 6 (my services) */}
              <div className="page-back">
                <Title heading="Contact Me!" />
                <ContactMe handleTurnPages={handleTurnPages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
