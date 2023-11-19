import React, { useEffect } from "react";
import { Work } from "../../lib/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { fetchWorks } from "../../lib/work/workActions";

function GalleryRedux() {
  const dispatch = useDispatch();
  const works = useSelector((state: RootState) => state.works);

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);

  return (
    <div className="gallery">
      <h2>Voici la gallery</h2>
      {works.map((item: Work, index: number) => (
        <figure key={index}>
          <img src={item.imageUrl} alt={`${item.imageUrl} image`} />
        </figure>
      ))}
    </div>
  );
}

export default GalleryRedux;
