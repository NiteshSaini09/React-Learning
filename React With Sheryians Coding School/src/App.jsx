import { useState } from "react";
import "./App.css";

function App() {
  let [x, setX] = useState(0);
  let Inc = () => {
    setX(x + 1);
  };
  let Dec = () => {
    setX(x - 1);
  };
  return (
    <div className="w-full h-screen bg-black text-white text-2xl p-2 flex flex-col items-center gap-5">
      <h1>{x}</h1>
      <div class="inline-flex gap-3">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={Inc}>
          Increase
        </button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={Dec}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
