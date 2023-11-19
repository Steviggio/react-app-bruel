import { Work } from "../../lib/interfaces";
import { GalleryProps } from "../../lib/interfaces";
import filteredWork from "../../lib/common";

function Gallery({ works, selectedCategory }: GalleryProps) {
  const filteredWorks = selectedCategory ? filteredWork(works, selectedCategory) : works;

  if (!filteredWorks || filteredWorks.length === 0) {
    return <div>No works found.</div>; // Handle case when no works are available
  }

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
