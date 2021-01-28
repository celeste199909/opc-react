import "./style.css"

import AppIcon from "../../components/app-icon"
import Toolbar from "../../components/app-tool-bar"
// 自定义hooks
import useWindowZoom from "../../customhooks/window-zoom"
import usePrepositionWindow from "../../customhooks/preposition-window"

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

  useWindowZoom(Music.name, { right: true, bottom: true, rightBottom: true })
  usePrepositionWindow(Music.name)
  return (
    <div id="music" className="application">
      <Toolbar theApp={Music} />
      <div>{Music.name}</div>
      <div>{Music.version}</div>
    </div>
  );
}

export default Music;