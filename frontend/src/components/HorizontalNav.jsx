import { Link } from "react-router-dom";
import logo from "../assets/sportsee_logo.svg";

function HorizontalNav() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="sportsee-logo" className="header__logo" />
      </Link>
      <nav className="horizontal-nav">
        <Link className="horizontal-nav__link" to="/">
          Accueil
        </Link>
        <Link className="horizontal-nav__link" to="/">
          À propos
        </Link>
        <Link className="horizontal-nav__link" to="/">
          Réglages
        </Link>
        <Link className="horizontal-nav__link" to="/">
          Communauté
        </Link>
      </nav>
    </header>
  );
}

export default HorizontalNav;
