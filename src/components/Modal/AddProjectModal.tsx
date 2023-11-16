import { Work } from "../../lib/interfaces";
import ReactDOM from "react-dom";
import { GalleryModalProps } from "../../lib/interfaces";
import TrashBin from "../../assets/icons/trash-bin-big.png"
import Vector from "../../assets/icons/vector.png"
import ModalGallery from "./ModalGallery";
import useModal from "./useModal";
import { getUserInfos } from "../../lib/common";
import { getToken } from "../../lib/common";
import axios from "axios";


export const AddProjectModal: React.FC<GalleryModalProps> = ({ show, onCloseButtonClick, projects }) => {
  const { isShowing, toggle: toggleModal } = useModal();

  const handleClick = async (index: number) => {
    console.log(`Clicked on trash bin at index ${index}`);

    const authInfos = getUserInfos()
    const authToken = getToken()
    if (authInfos && authInfos.userId && authToken) {
      const userId = authInfos.userId;
      const token = authToken
      console.log("userId value: ", userId)
      console.log("Token value: ", token)
      try {
        const response = await axios.delete(
          `http://localhost:5678/api/works/${index}`, {
          headers: {
            'Authorization': `Bearer ${token + " " + `userId:${userId}`}`,
            'Accept': '*/*'
          },
        });
        if (response.status === 200) {
          console.log("Work successfully deleted.");
          const updatedWorks = [...works]; // Créez une copie de la liste existante
          updatedWorks.splice(index, 1); // Supprimez le projet de la liste
          setWorks(updatedWorks); // Mettez à jour l'état avec la nouvelle liste de projets
        } else {
          console.error("An error occurred when deleting a project.");
        }
      } catch (error) {
        console.log({ error })
      }

    } else {
      console.error("Cannot get the authentication informations.");
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
            {projects.map((item: Work, index: number) => (
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
