import React from "react";
import ZiziPlayer from "./ZiziPlayer";
import "./App.css"
import ShowData from "./ShowData";
import { InputRounded } from "@material-ui/icons";

function App() {
  return (
    <div className="zizi">
      <ZiziPlayer showData={ShowData}/>
    </div>
  );
}



// Intro

// Enter button - img/enterButton.png & img/enterButtonHover.png

// Could animate curtains with css - curtain-side-full.png (split left and right)
// Or as start of host-intro.m3u8
// then play host-intro-test.m3u8 with music from youtube - id: "Si2KRXIfE4M"
// then host-between-test.m3u8 with layers/shadow and zoom enabled - sound direct from audio file between songs - performers panel, then songs panel comes out when this video loads (or 2 sec delay?)

export default App;
