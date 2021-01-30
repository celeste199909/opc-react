import "./style.css"
// import { useEffect } from "react"
import iconImg from "../../static/images/music.png"
// app 组件
import AppIcon from "../../components/app/icon"
import Toolbar from "../../components/app/toolsbar"
// 自定义hooks
import useWindowZoom from "../../customhooks/window-zoom"
import usePrepositionWindow from "../../customhooks/preposition-window"

// import data from "./get"

let Bibilili = {
  name: "bibilili",
  cname: "哔哔哩哩",
  iconImg,
  Icon: BibililiIcon,
  UI: BibililiUI
}

function BibililiIcon (props) {
  return (
    <AppIcon theApp={Bibilili} />
  );
}

function BibililiUI () {
  useWindowZoom(Bibilili.name, { right: true, bottom: true, rightBottom: true })
  usePrepositionWindow(Bibilili.name)

  // useEffect(() => {
  //   console.log(data)
  // }, []);
  return (
    <div id="bibilili" className="application">
      <Toolbar theApp={Bibilili} />
      {/* <iframe src="//player.bilibili.com/player.html?aid=586457504&bvid=BV1mz4y1m71t&cid=288685176&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe> */}
      <div>
        <iframe title="hhh" src="//player.bilibili.com/player.html?bvid=BV1qo4y1R789" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true}> </iframe>
      </div>

    </div>
  );
}

export default Bibilili;