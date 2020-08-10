import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css";

function click() {
  console.log("click");
}

function App() {
  return (
    <div className="App">
      <ZiziPlayer />
    </div>
  );
}

export default App;
