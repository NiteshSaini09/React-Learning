import React, { useState } from "react";

function Prop({ data }) {
    let [co,setCo]=useState(false)
  return (
    <>
      <div>{data.name}</div>
      <div>{data.age}</div>
      <button className="p-3 border-1 rounded" onClick={()=>setCo(!co)}>Change</button>
      <button className="p-3 border-1 rounded" onClick={()=>setCo(0)}>Reset</button>
      <h3 className={`${co==true ? "text-blue-300" : "text-red-400"}`}>{`${co==true ? "Hello" :"Chalo"}`}</h3>
    </>
  );
}

export default Prop;
