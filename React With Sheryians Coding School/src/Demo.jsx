import React, { useState } from "react";
import Prop from "./Prop";
function Demo() {
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
      <div className="inline-flex gap-3">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={Inc}
        >
          Increase
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={Dec}
        >
          Decrease
        </button>
      </div>
      <Prop data={{ name: "Nitesh", age: 18 }} />
    </div>
  );
}

export default Demo;
