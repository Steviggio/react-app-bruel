import { Work } from "../../lib/interfaces";
import { useState, useEffect } from "react";
import { API_ROUTES } from "../../utils/constant";
import ReactDOM from "react-dom";
import { AddProjectModalProps } from "../../lib/interfaces";
import TrashBin from "../../assets/icons/trash-bin-big.png"
import Vector from "../../assets/icons/vector.png"


export const AddProjectModal: React.FC<AddProjectModalProps> = ({ show, onCloseButtonClick, projects }) => {

  if (!show) {
    return null;
  }


  return ReactDOM.createPortal(
    <aside
      className={`modal-main `}
      id="modal-box1"
      aria-hidden="true"
      role="dialog"
      aria-modal="false"
      aria-labelledby="titlemodal"
    >
      <div id="gallery_modal" className="modal-box-content">
        <span className="js-close" onClick={onCloseButtonClick}>
          &times;
        </span>
        <h2 id="titlemodal">Galerie photo</h2>
        <div className="modal-gallery">
          {projects.map((item: Work, index: number) => (
            <figure key={index}>
              {index === 0 ? (
                <>
                  <button className="deleteButtons"><img src={Vector} alt="Vector icon" /></button>
                  <button className="deleteButtons"><img src={TrashBin} alt="Trash bin icon" /></button>
                </>
              )
                : (
                  <button className="deleteButtons"><img src={TrashBin} alt="Trash bin icon" /></button>)}
              <img src={item.imageUrl} alt={`${item.imageUrl} image`} />
            </figure>
          ))}
        </div>

        <div className="modal-border"></div>
        <div className="modal-btns">
          <a href="#modal-box2" className="js-modal-box2" id="modal-box-add">
            Ajouter une photo
          </a>
          <a id="modal-box-delete">Supprimer la galerie</a>
        </div>
      </div>
    </aside>, document.body
  );
};
