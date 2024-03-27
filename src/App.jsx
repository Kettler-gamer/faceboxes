import { useState } from "react";
import "./App.css";
import bild1 from "./assets/bild1.jpg";
import bild2 from "./assets/bild2.jpg";
import aibild1 from "./assets/13893666-a18d-4daf-ae2f-b0f77e6ef1f2_large.jpg";
// import aibild1 from "./assets/13893666-a18d-4daf-ae2f-b0f77e6ef1f2.jpg";
import aibild2 from "./assets/be991e33-c12b-4d9b-b88b-5131521a4a9b_large.jpg";
// import aibild2 from "./assets/be991e33-c12b-4d9b-b88b-5131521a4a9b.jpg";
import aibild3 from "./assets/6d4aeb94-819f-4a7a-9121-6255c1ad6dfe_large.jpg";
// import aibild3 from "./assets/6d4aeb94-819f-4a7a-9121-6255c1ad6dfe.jpg";
import aibild4 from "./assets/89c3138d-7bf0-4a39-9d6d-c8a090bc23b9_large.jpg";
// import aibild4 from "./assets/89c3138d-7bf0-4a39-9d6d-c8a090bc23b9.png";
import ImageContainer from "./components/ImageContainer";

function App() {
  // Bild 1
  const boxes1 = useState([{ width: 450, height: 475, x: 200, y: 200 }])[0];

  // Bild 2
  const boxes2 = useState([
    { width: 125, height: 150, x: 125, y: 400 },
    { width: 125, height: 150, x: 575, y: 450 },
    { width: 125, height: 150, x: 1033, y: 400 },
  ])[0];

  // Bild med AI koordinater 1
  const aiBoxes1 = useState([{ width: 361, height: 304, x: 287, y: 229 }])[0]; // [(229, 361, 304, 287)]

  // Bild med AI koordinater 2
  // const aiBoxes2 = useState([{ width: 339, height: 546, x: 391, y: 494 }])[0];
  const aiBoxes2 = useState([{ width: 339, height: 546, x: 391, y: 494 }])[0];

  // Bild med AI koordinater 3
  // const aiBoxes3 = useState([{ width: 850, height: 110, x: 295, y: 664 }])[0]; // [(295, 664, 850, 110)]
  const aiBoxes3 = useState([{ width: 664, height: 850, x: 110, y: 295 }])[0]; // [(295, 664, 850, 110)]

  // Bild med AI koordinater 4
  const aiBoxes4 = useState([{ width: 491, height: 526, x: 170, y: 847 }])[0];

  return (
    <>
      {/* <ImageContainer image={bild1} boxes={boxes1} />
      <ImageContainer image={bild2} boxes={boxes2} /> */}
      <ImageContainer image={aibild1} boxes={aiBoxes1} />
      <ImageContainer image={aibild2} boxes={aiBoxes2} />
      <ImageContainer image={aibild3} boxes={aiBoxes3} />
      <ImageContainer image={aibild4} boxes={aiBoxes4} />
    </>
  );
}

export default App;
