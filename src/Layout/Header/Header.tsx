import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/icons/instagram.png"
import PenToSquare from "../../assets/icons/pen-to-square-white.png"
import { isAuthTokenPresent } from "../../lib/common";

const Header = () => {

  return (
    <>
      {isAuthTokenPresent() && (
        <section className="modal-management visible">
          <div id="modal" className="modal-btn">
            <img src={PenToSquare} alt="pen-to-square icon" />
            <p>Mode édition</p>
            <button className="btn-modal">publier les changements</button>
          </div>
        </section>)}
      <header className="flex justify-between">
        <Link to="/"><h1>Sophie Bluel <span>Architecte d'intérieur</span></h1></Link>
        <nav>
          <ul className="links-nav">
            <li>Projets</li>
            <li>Contact</li>
            <li><Link to="/login" >Login</Link></li>
            <li><img src={InstagramIcon} alt="Instagram" /></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;