import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/icons/instagram.png"

const Header = () => {
  return (
    <>
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