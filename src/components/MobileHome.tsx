import React from "react";
import ProfilePage from "./ProfilePage";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import MyServices from "./MyService";
import MySkills from "./MySkills";
import LatestProjects from "./LatestProjects";
import ContactMe from "./ContactMe";
import "../mobile.css";

const MobileHome = () => {
  return (
    <div className="mobile-home">
      <div className="profile-section">
        <ProfilePage />
      </div>
      <div className="content-section">
        <Card title="Work Experience">
          <WorkExperience />
        </Card>
        <Card title="Education">
          <Education />
        </Card>
        <Card title="My Services">
          <MyServices />
        </Card>
        <Card title="My Skills">
          <MySkills />
        </Card>
        <Card title="Latest Projects">
          <LatestProjects />
        </Card>
        <Card title="Contact Me">
          <ContactMe />
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
