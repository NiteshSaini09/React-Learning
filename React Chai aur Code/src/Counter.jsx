import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset=()=>{
    setCount(count-count)
  }
  return (
    <div>
      <h3 className="text-amber-300 text-lg ">Count:{count}</h3>
      <button className="outline-1 m-5" onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default Counter