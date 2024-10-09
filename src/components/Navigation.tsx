import { links } from "../assets/constant";
import { Link } from "react-router-dom";

const Navigation = (props: {
  isChecked: boolean;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  // Handle the click on a link and toggle navigation menu
  const handleClick = () => {
    // Create a synthetic event to uncheck the checkbox
    const syntheticEvent = {
      target: { checked: false },
    } as React.ChangeEvent<HTMLInputElement>;

    // Call the handleCheckboxChange with the synthetic event
    props.handleCheckboxChange(syntheticEvent);
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={props.isChecked}
        onChange={props.handleCheckboxChange}
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {links.map((content, index) => (
            <li className="navigation__item" key={index}>
              <Link
                to={content.link}
                className="navigation__link"
                onClick={handleClick}
              >
                <span>{content.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
