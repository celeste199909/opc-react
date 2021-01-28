import "./style.css"
import { useState } from "react"
// import zoom from "../app-zoom"
import useWindowZoom from "../../customhooks/window-zoom"


import startIcon from "../../images/applications/startup.png"
import touxiang from "../../images/touxiang.jpg"

export default function StartMenu () {
  // 控制开始菜单的 显示/隐藏
  let [showStartMenu, setShowStartMenu] = useState(false)
  // 使用 自定义 hooks 添加窗口缩放
  let id = "start-menu-content"
  useWindowZoom(id, { top: true, right: true })

  return (
    <div id="start-menu">
      <div className="start-btn" onClick={() => {
        setShowStartMenu(!showStartMenu)
      }}>
        <img src={startIcon} alt="start" draggable="false" />
      </div>
      <div id="start-menu-content" className={showStartMenu ? "active" : "unactive"}>
        <div className="menu-left">
          <div><i className="iconfont icon-shezhi"></i></div>
          <div><i className="iconfont icon-xianxingguanji"></i></div>
        </div>
        <div className="menu-right">
          <div className="touxiang"><img src={touxiang} alt="touxiang" draggable={false} /></div>
          <div className="username">用户名</div>
          <article>
            <p>使用提示</p>
            <p>1. 双击打开应用</p>
            <p>2. 鼠标放在窗口边缘可进行缩放窗口</p>
            <p>3. 右键点击桌面可打开上下文菜单</p>
            <p>4. 按住桌面图标可拖动图标位置</p>
          </article>
        </div>
      </div>
    </div>
  )
}