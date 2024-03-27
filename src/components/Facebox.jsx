import React, { useEffect, useState } from "react";

export default function Facebox({ box, imageRef }) {
  const [boxDimensions, setBoxDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    function calculateBox() {
      const scaleX = imageRef.clientWidth / imageRef.naturalWidth;
      const scaleY = imageRef.clientHeight / imageRef.naturalHeight;

      const [x1, x2] =
        box.x < box.width ? [box.x, box.width] : [box.width, box.x];
      const [y1, y2] =
        box.y < box.height ? [box.y, box.height] : [box.height, box.y];

      const width = (x2 - x1) * scaleX;
      const height = (y2 - y1) * scaleY;

      const top = y1 * scaleY;
      const left = x1 * scaleX;

      setBoxDimensions({ width, height, top, left });
    }

    imageRef.addEventListener("load", calculateBox);
    window.addEventListener("resize", calculateBox);

    return () => {
      imageRef.removeEventListener("load", calculateBox);
      window.removeEventListener("resize", calculateBox);
    };
  }, [imageRef]);

  return <div className="box" style={boxDimensions}></div>;
}
