import { useState, useEffect } from "react"
import { Work } from "../../lib/interfaces";
// Component meant for the gallery containing the project

function Gallery() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5678/api/works")
      .then(response => response.json())
      .then((work) => setWork(work));
  }, []);

  return (
    <div className="gallery">
      {work.map((item: Work, index: number) => (

        <figure key={index}>
          <img src={item.imageUrl} alt={`${item.imageUrl} image`} />
        </figure>
      ))}
    </div>
  )
}

export default Gallery;