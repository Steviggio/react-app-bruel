import { Work } from "../../lib/interfaces";
import ReactDOM from "react-dom";
import { GalleryModalProps } from "../../lib/interfaces";
import TrashBin from "../../assets/icons/trash-bin-big.png"
import Vector from "../../assets/icons/vector.png"
import ModalGallery from "./ModalGallery";
import useModal from "./useModal";
import { getUserInfos } from "../../lib/common";
import { getToken } from "../../lib/common";
import { API_ROUTES } from "../../utils/constant";
import { useEffect, useState } from "react";


export const AddProjectModal: React.FC<GalleryModalProps> = ({ show, onCloseButtonClick, projects, deleteProject }) => {
  const [works, setWorks] = useState<Work[]>(projects); // State for works array
  const { isShowing, toggle: toggleModal } = useModal();

  useEffect(() => {
    setWorks(projects);
  }, [projects]);

  const handleClick = (index: number) => {
    try {
      deleteProject(index); // Call deleteProject function from props
      console.log("Work successfully deleted.");
    } catch (error) {
      console.error("An error occurred when deleting a project:", error);
    }
  };

  if (!show) {
    return null;
  }


  return ReactDOM.createPortal(

    <>
      <ModalGallery show={isShowing} onCloseButtonClick={toggleModal} backToPrevious={toggleModal} />
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
            {works.map((item: Work, index: number) => (
              <figure key={index}>
                {index === 0 ? (
                  <>
                    <button className="deleteButtons"><img src={Vector} alt="Vector icon" /></button>
                    <button className="deleteButtons" key={item.id} onClick={() => handleClick(item.id)}><img src={TrashBin} alt="Trash bin icon" /></button>
                  </>
                )
                  : (
                    <button className="deleteButtons" key={item.id} onClick={() => handleClick(item.id)}><img src={TrashBin} alt="Trash bin icon" /></button>)}
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
      </aside></>, document.body
  );
};
