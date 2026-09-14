import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  let [number, setNumber] = useState(0);

  return (
    <>
      <p>{number}</p>
      <button
        className="counter"
        width="200px"
        onClick={() => {
          if (number == 20) {
            console.log("Max count reached");
          } else {
            setNumber(number + 1);
          }
        }}
      >
        Increase{" "}
      </button>
      <button 
       className="counter"
        width="200px"
        onClick={() => {
          if (number==0) {
            console.log("min count reached");
          } else {
            setNumber(number - 1);
          }
        }}
      >Decriease</button>
      <h1>Hello</h1>
    </>
  );
}

export default App;
