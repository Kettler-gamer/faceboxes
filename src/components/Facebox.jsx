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

      const width = box.width * scaleX;
      const height = box.height * scaleY;

      const top = box.y * scaleY;
      const left = box.x * scaleX;

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
