import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";

function App() {
  const name = "Yashpreet";
  const college = "Chandigarh University";


  return (
     <div>
       <Navbar />
       <Hero />
       <UploadBox />
    </div>
  )
}

export default App
