import ReactDOM from "react-dom"
import { AddProjectModalProps } from "../../lib/interfaces";


const ModalGallery: React.FC<AddProjectModalProps> = ({ show, onCloseButtonClick, backToPrevious }) => {

  if (!show) {
    return null;
  }


  return ReactDOM.createPortal(
    <aside className="modal-main" id="modal-box2" aria-hidden="true" role="dialog" aria-modal="false"
      aria-labelledby="modal-add-title" >


      <div className="modal-box-content" id="add_photo">
        <span>
          <button id="js-modal-back" onClick={backToPrevious}>
            <img id="modal-add-arrow-img" src="./assets/icons/back.png" alt="" />
          </button>
        </span>
        <span className="js-close" onClick={onCloseButtonClick}>&times;</span>
        <h2 id="modal-add-title">Ajout photo</h2>
        <div className="modal-add-box">
          <div id="modal-add-jpg">
            <div id="modal-add-jpg-container"></div>
            <img className="modal-add-element" id="modal-add-img" src="./assets/icons/modal-add.png" alt="" />
            <label htmlFor="modal-add-input" id="modal-add-jpg-btn">+ Ajouter
              photo</label>
            <p className="modal-add-element" id="modal-add-text">jpg, png : 4mo max</p>
          </div>
          <form id="modal-add-form" action="" autoComplete="off">
            <input className="modal-add-element" type="file" name="image" accept="image/*" id="modal-add-input" />
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="category">Catégorie</label>
            <div id="datalist">
              <input list="categories" name="" id="category" />
              <i id="datalist-icon" className="icon iconfont icon-arrow"></i>
              <datalist id="categories"></datalist>
            </div>
          </form>
        </div>
        <div className="modal-border"></div>
        <div className="modal-btns">
          <button type="submit" form="modal-add-form" id="modal-box-validate">Valider</button>
        </div>
      </div>

    </aside>, document.body
  )
}

export default ModalGallery;