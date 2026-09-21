import { useState } from "react";
import "./App.css";
import ColorTab from "./ColorTab.jsx";
import HeroSaaS2 from "./Hero.jsx";
import HeroSection9 from "./LoginForm.jsx";
function App() {
  const [color,setColor]=useState("white")
  return (
    <div className="flex-1 w-screen" style={{backgroundColor:color}}>
        <HeroSaaS2/>
      <div className="flex flex-col gap-20 mb-20 ">
        <HeroSection9/>
        <ColorTab setColor={setColor}/>
      </div>
    </div>
  );
}
export default App;
