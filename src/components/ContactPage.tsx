import "../Contact.css";
import { socialMedia } from "../assets/constant";

const ContactPage = () => {
  return (
    <div className="body">
      <ul>
        {socialMedia.map((object, index) => (
          <li key={index}>
            <a key={index} href={object.route}>
              <i key={index} className={`${object.socials} icon`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
