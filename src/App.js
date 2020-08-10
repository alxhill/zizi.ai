import React from "react";
import ControlledYoutube from "./Youtube";
import "./App.css";

function click() {
  console.log("click");
}

function App() {
  return (
    <div className="App">
      <ControlledYoutube />
    </div>
  );
}

export default App;
