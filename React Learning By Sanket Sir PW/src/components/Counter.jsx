import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let [edit,setEdit]=useState(false)
  let inc = () => {
    setCount(count + 1);
  };
  let dec = () => {
    if (count >= 1) setCount(count - 1);
  };

  return (
    <>
    
      <h1>{count}</h1>
      <h3>
        {count} is an {count % 2 == 0 ? "Even" : "Odd"}
      </h3>
      <button
        className="border px-3 py-1 ml-2 rounded bg-green-500 font-bold hover:bg-green-700 "
        onClick={inc}
      >
        Count ++
      </button>
      <button
        className="border px-3 py-1 ml-2 rounded bg-red-500 font-bold hover:bg-red-700 "
        onClick={dec}
      >
        Count --
      </button>
    </>
  );
}
export default Counter;
