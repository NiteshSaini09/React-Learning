import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Name from "./components/Name";
import Counter from "./components/Counter";
function App() {
  
  return (
    <>
      <div className="flex justify-around mt-10">
        <Card title="Buterfly" desc="Buterfly can fly"/>
        <Card title="Spidermen" desc="Spidermen also can fly" img="https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/a0f87f7e-434d-4c3c-9584-f7ee351d5f64-10432-dubai-img-worlds-of-adventure---uae-resident-offer-01.jpg?auto=compress%2Cformat&w=510.8727272727273&h=401.4&q=90&ar=14%3A11&crop=faces&fit=crop"/>
        <Card/>
      </div>
      <Name>
          <p style={{color:"green"}}>This is name</p>
          <h1>This is passed JSX</h1>
      </Name>
      <Counter/>
    </>
  );
}

export default App;
