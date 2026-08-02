import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <UploadBox />
      <Gallery />
    </>
  );
}

export default App;