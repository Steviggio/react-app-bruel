import { Work } from "../../lib/interfaces";
import filteredWork from "../../lib/common";
import { GalleryProps } from "../../lib/interfaces";


function Gallery({ works, selectedCategory }: GalleryProps) {
  const filteredWorks = selectedCategory
    ? filteredWork(works, selectedCategory)
    : works;

  return (
    <div className="gallery">
      {filteredWorks.map((item: Work, index: number) => (
        <figure key={index}>
          <img src={item.imageUrl} alt={`${item.imageUrl} image`} />
        </figure>
      ))}
    </div>
  );
}

export default Gallery;
