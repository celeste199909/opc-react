import "./style.css"

import AppIcon from "../../components/app-icon"
import Toolbar from "../../components/app-tool-bar"
import zoom from "../../components/app-zoom"
import { useEffect } from "react"

let Music = {
  name: "music",
  version: "1.0.0",
  Icon: MusicIcon,
  UI: MusicUI
}

function MusicIcon(props) {
  return (
    <AppIcon theApp={Music}/>
  );
}

function MusicUI(props) {
  useEffect(() => {
    zoom(Music.name)
  })
  return (
    <div id="music" className="application">
      <Toolbar theApp={Music}/>
      <div>{Music.name}</div>
      <div>{Music.version}</div>
    </div>
  );
}

export default Music;