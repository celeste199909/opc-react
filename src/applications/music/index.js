import "./style.css"

import AppIcon from "../../components/app-icon"
import Toolbar from "../../components/app-tool-bar"
import zoom from "../../components/app-zoom"
import { useEffect } from "react"

import iconImg from "../../images/applications/music.png"

let Music = {
  name: "music",
  cname: "音乐",
  version: "1.0.0",
  iconImg,
  Icon: MusicIcon,
  UI: MusicUI
}

function MusicIcon (props) {
  return (
    <AppIcon theApp={Music} />
  );
}

function MusicUI (props) {
  useEffect(() => {
    zoom(Music.name, { right: true, bottom: true })
    // 只在挂载是添加一次缩放控价
  }, [])
  return (
    <div id="music" className="application">
      <Toolbar theApp={Music} />
      <div>{Music.name}</div>
      <div>{Music.version}</div>
    </div>
  );
}

export default Music;