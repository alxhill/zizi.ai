import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css";

function App() {
  return (
    <div className="zizi">
      <h1>Zizi - a virtual show <span style={{color: "#777"}}>| August prototype</span></h1>
      <ZiziPlayer />
    </div>
  );
}

export default App;
