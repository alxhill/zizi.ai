import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css"
import ShowData from "./ShowData";

function App() {
  return (
    <div className="zizi">
      <ZiziPlayer showData={ShowData}/>
    </div>
  );
}

export default App;
