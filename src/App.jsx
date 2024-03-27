import { useState } from "react";
import "./App.css";
import aibild1 from "./assets/13893666-a18d-4daf-ae2f-b0f77e6ef1f2_large.jpg";
import aibild2 from "./assets/be991e33-c12b-4d9b-b88b-5131521a4a9b_large.jpg";
import aibild3 from "./assets/6d4aeb94-819f-4a7a-9121-6255c1ad6dfe_large.jpg";
import aibild4 from "./assets/89c3138d-7bf0-4a39-9d6d-c8a090bc23b9_large.jpg";
import aibild5 from "./assets/c0ea3daf-a61b-4429-89db-ca9d75f049d2_large.jpg";
import ImageContainer from "./components/ImageContainer";

function App() {
  // Bild med AI koordinater 1
  const aiBoxes1 = useState([{ width: 361, height: 304, x: 287, y: 229 }])[0];

  // Bild med AI koordinater 2
  // const aiBoxes2 = useState([{ width: 546, height: 339, x: 391, y: 494 }])[0]; // y -> width, width -> height, height -> x, x -> y
  const aiBoxes2 = useState([{ width: 494, height: 546, x: 339, y: 391 }])[0];

  // Bild med AI koordinater 3
  // const aiBoxes3 = useState([{ width: 850, height: 110, x: 295, y: 664 }])[0];
  const aiBoxes3 = useState([{ width: 664, height: 850, x: 110, y: 295 }])[0];

  // Bild med AI koordinater 4
  // const aiBoxes4 = useState([{ width: 491, height: 526, x: 170, y: 847 }])[0];
  const aiBoxes4 = useState([{ width: 847, height: 491, x: 526, y: 170 }])[0];

  // Bild med AI koordinater 5
  const aiBoxes5 = useState([{ width: 911, height: 726, x: 356, y: 172 }])[0];

  return (
    <>
      <ImageContainer image={aibild1} boxes={aiBoxes1} />
      <ImageContainer image={aibild2} boxes={aiBoxes2} />
      <ImageContainer image={aibild3} boxes={aiBoxes3} />
      <ImageContainer image={aibild4} boxes={aiBoxes4} />
      <ImageContainer image={aibild5} boxes={aiBoxes5} />
    </>
  );
}

export default App;
