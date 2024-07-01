import "./App.css";
import "./style.css";
import { useState } from "react";

// here is the array consisting the links of images
const one = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
];

// the total App is exported from here
export default function App() {
  // here the state is declared and initialized with the first image link
  const [present, setPresent] = useState(0);

  // both function Previous() & Next() are declared here
  function Previous() {
    console.log("prev");
    setPresent(present === 0 ? one.length - 1 : present - 1);
  }
  function Next() {
    console.log("next");
    setPresent(present === one.length - 1 ? 0 : present + 1);
  }

  // total app is returned from here
  return (
    <div className="whole-carousel">
      <h1>Image Carousel by Krishna</h1>
      <div className="image-carousel">
        <button onClick={Previous}>prev</button>
        {/* from here images are returned & it is the crucial logic for the whole carousel images displays */}
        {one.map(
          (item, index) =>
            present === index && (
              <div key={index}>
                <img
                  src={item}
                  alt="This is a picture"
                  width="410px"
                  height="250px"
                />
              </div>
            ),
        )}
        <button onClick={Next}>next</button>
      </div>
    </div>
  );
}
