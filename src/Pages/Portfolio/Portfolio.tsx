import PenToSquare from "../../assets/icons/pen-to-square-thin.png"
import Gallery from "../../components/Gallery/Gallery";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h2>Mes Projets</h2>
        <div className="modal-modify-btn">
          <div id="portfolio-modal">
            <img src={PenToSquare} alt="" />
            <a href="#modal-box1" className="js-modal">modifier</a>
          </div>
        </div>
        <article>
          <div className="filter">
            <button className="short buttons btn-all">Tous</button>
            <button className="short buttons btn-objects">Objets</button>
            <button className="long buttons btn-flats">Appartements</button>
            <button className="long buttons btn-hotels">Hôtels & restaurants</button>
          </div>
        </article>
        <Gallery />
      </section>
    </>
  )
}

export default Portfolio;