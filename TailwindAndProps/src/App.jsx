import { useState } from "react";
import NavHorizontal from "./Nav.jsx";
import HeroSection4 from "./Header.jsx";
import Features3 from "./Fearures.jsx";
import ContentAvatar from "./Users.jsx";
import { headerData,heroData } from "./data.js";
import HeroSocial from "./Rating.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavHorizontal data={headerData}/>
      <HeroSection4  data={heroData}/>
      <Features3 />
      <ContentAvatar />
      <HeroSocial/>
      <p>Hello</p>
    </>
  );
}

export default App;
