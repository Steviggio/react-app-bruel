import { useState } from "react";
import data, { fakeData } from "./fakeGallery";

let nextId = 0;

const TestModal = () => {
  const [gallery, setGallery] = useState<fakeData[]>([]);
  setGallery(data)
  return (
    <>
      <div className="flex flex-col justify-center items-center w-56 h-56">
        <h2>Display and handle array datas</h2>
        <ul>
          {gallery.map((item: string) => {

          })}
        </ul>
      </div>
    </>
  )
}

export default TestModal;