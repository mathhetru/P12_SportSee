import { Link } from "react-router-dom";
import yogaLogo from "../assets/sportsee_yoga.svg";
import swimLogo from "../assets/sportsee_swim.svg";
import bikeLogo from "../assets/sportsee_bike.svg";
import fitnessLogo from "../assets/sportsee_fitness.svg";

function VerticalNav() {
  return (
    <div className="vertical-nav">
      <div className="vertical-nav-container">
        <Link className="vertical-nav__link" to="/">
          <img
            src={yogaLogo}
            alt="sportsee-yoga"
            className="vertical-nav__icon"
          />
        </Link>
        <Link className="vertical-nav__link" to="/">
          <img
            src={swimLogo}
            alt="sportsee-swim"
            className="vertical-nav__icon"
          />
        </Link>
        <Link className="vertical-nav__link" to="/">
          <img
            src={bikeLogo}
            alt="sportsee-bike"
            className="vertical-nav__icon"
          />
        </Link>
        <Link className="vertical-nav__link" to="/">
          <img
            src={fitnessLogo}
            alt="sportsee-fitness"
            className="vertical-nav__icon"
          />
        </Link>
      </div>
      <p className="vertical-nav__text">Copyright, SportSee 2024</p>
    </div>
  );
}

export default VerticalNav;
