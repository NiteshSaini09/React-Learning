import { useState } from "react";
import "./App.css";
import ColorTab from "./ColorTab.jsx";
function App() {
  const [color,setColor]=useState("white")
  return (
    <div className="flex-1 w-screen" style={{backgroundColor:color}}>
      <div className="mt-150">
        <ColorTab setColor={setColor}/>
      </div>
    </div>
  );
}
export default App;
