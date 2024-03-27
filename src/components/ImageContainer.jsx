import React, { useState } from "react";
import Facebox from "./Facebox";

export default function ImageContainer({ image, boxes }) {
  const [imageRef, setImageRef] = useState();

  return (
    <div className="image-container">
      <img ref={setImageRef} className="image" src={image} />
      {imageRef &&
        boxes.map((box, index) => (
          <Facebox
            key={`box-${image}-${index}`}
            box={box}
            imageRef={imageRef}
          />
        ))}
    </div>
  );
}
