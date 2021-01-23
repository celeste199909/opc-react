import React, { useState } from "react";
import "./style.css"

import Toolbar from "../../components/app-tool-bar"

let Music = {
  name: "Music",
  version: "1.0.0",
  Icon: MusicIcon,
  UI: MusicUI
}

function MusicIcon(props) {
  return (
    <div className="icon" onClick={props.handleClick}>音乐icon</div>
  );
}

function MusicUI(props) {

  let [isMinimize, setMinimize] = useState(false)
  // console.log(setMinimize);
 
  function minimizeApp() {
     setMinimize(!isMinimize)
  }

  return (
    <div id="music" className={isMinimize ? "minimize" : ""}>
      <Toolbar theApp={{...props.theApp, minimizeApp}}/>
      <div>{Music.name}</div>
      <div>{Music.version}</div>
    </div>
  );
}

export default Music;