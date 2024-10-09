import React from "react";
import ProfilePage from "./ProfilePage";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import MyServices from "./MyService";
import MySkills from "./MySkills";
import LatestProjects from "./LatestProjects";
import ContactMe from "./ContactMe";
import "../mobile.css";

const MobileHome = ({
  handleTurnPages,
}: {
  handleTurnPages: (direction: string) => void;
}) => {
  return (
    <div className="mobile-home">
      <div className="profile-section">
        <ProfilePage />
      </div>
      <div className="content-section">
        <Card title="Work Experience">
          <WorkExperience handleTurnPages={handleTurnPages} />
        </Card>
        <Card title="Education">
          <Education handleTurnPages={handleTurnPages} />
        </Card>
        <Card title="My Services">
          <MyServices handleTurnPages={handleTurnPages} />
        </Card>
        <Card title="My Skills">
          <MySkills handleTurnPages={handleTurnPages} />
        </Card>
        <Card title="Latest Projects">
          <LatestProjects handleTurnPages={handleTurnPages} />
        </Card>
        <Card title="Contact Me">
          <ContactMe handleTurnPages={handleTurnPages} />
        </Card>
      </div>
    </div>
  );
};

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default MobileHome;
