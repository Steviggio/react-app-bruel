import ProfilePic from "../../assets/images/sophie-bluel.png"
import PenToSquare from "../../assets/icons/pen-to-square-thin.png"

const Introduction = () => {

  return (
    <>
      <section id="introduction">
        <figure>
          <img src={ProfilePic} alt="Sophie Bluel portrait" />
          <div className="modal-modify-btn">
            <div id="introduction-modal">
              <img src={PenToSquare} alt="" />
              <a href="#modal-box1" className="js-modal">modifier</a>
            </div>
          </div>
        </figure>


        <article>

          <div className="modal-modify-btn">
            <div id="article-modal">
              <img src={PenToSquare} alt="" />
              <a href="#modal-box1" className="js-modal">modifier</a>
            </div>
          </div>
          <h2>Designer d'espace</h2>
          <p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison
            finale du chantier.</p>
          <p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les
            couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du
            chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
          <p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG,
            décorateur(trice)</p>
        </article>
      </section>
    </>
  )
}

export default Introduction;