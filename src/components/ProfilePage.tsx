import { socialMedia } from "../assets/constant";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <img src="images/photo.png" alt="photo" />
      <h1>Duke Kojo Kongo</h1>
      <h3>Data Scientist & Software Developer</h3>
      <div className="social-media">
        {socialMedia.map((object, index) => (
          <a key={index} href={object.route}>
            <i key={index} className={object.socials}></i>
          </a>
        ))}
      </div>

      <p>
        I'm Duke Kojo Kongo, a data scientist and software developer. I
        specialize in transforming data into actionable insights and creating
        efficient software solutions. With a strong analytical mindset and
        coding skills, I thrive on solving complex problems and delivering
        high-quality results.
      </p>

      <div className="btn-box">
        <a href="" className="btn">
          Download CV
        </a>
        <a href="" className="btn contact-me">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;
