import { useState } from "react";
import NavHorizontal from "./Nav.jsx";
import HeroSection4 from "./Header.jsx";
import Features3 from "./Fearures.jsx";
import ContentAvatar from "./Users.jsx";

import HeroSocial from "./Rating.jsx";
import "./App.css";
function App() {
  return (
    <>
      <NavHorizontal />
      <HeroSection4 />
      <Features3 />
      <ContentAvatar />
      <HeroSocial/>
      <p>Hello</p>
    </>
  );
}

export default App;
