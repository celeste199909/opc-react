import { useEffect, useState } from "react";
import "./style/context-menu.css"
import System from "../../system-api/index.js"

export default function ContextMenu () {
  // 菜单显示的状态
  let [showContextMenu, setShowContextMenu] = useState(false)
  // 设置菜单出现的位置
  let [style, setStyle] = useState({})
  // 根据点击目标不同显示不同功能的菜单

  useEffect(() => {

    let webpc = document.querySelector("#web-pc")
    // let desktop = document.querySelector("#desktop")

    document.addEventListener("contextmenu", (e) => {
      // 阻止默认事件
      e.preventDefault()
    })
    // 给web-pc添加事件：单击隐藏右键菜单
    webpc.addEventListener("click", hideContextMenu)

    function hideContextMenu () {
      setShowContextMenu(false)
    }
    webpc.addEventListener("contextmenu", handleContextMenu)
    // 创建 上下文菜单 （功能 位置）
    function handleContextMenu (e) {
      let target = e.target
      if (target.id !== "desktop" && target.className !== "desktop-droppable"
        && !target.className.startsWith("app-icon") && !target.id.startsWith("status")) {
        return
      }
      let viewWidth = document.body.clientWidth
      let viewHeight = document.body.clientHeight
      let { clientX, clientY } = e
      if (viewWidth - clientX < 150) {
        clientX = clientX - 150
      }
      if (viewHeight - clientY < 82) {
        clientY = clientY - 82
      }
      setStyle({
        left: clientX + "px",
        top: clientY + "px"
      })
      setShowContextMenu(!showContextMenu)
    }
    // 如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
    // 在这里清除监听事件
    return function cleanup () {
      webpc.removeEventListener("contextmenu", handleContextMenu)
      webpc.removeEventListener("click", hideContextMenu)
    };
  })

  return (
    <div id="context-menu"
      className={showContextMenu ? "active" : " "}
      style={style}
    >
      <ul>
        <li onClick={System.StatusBar.hideOrShow}>隐藏/显示状态栏</li>
        <li onClick={System.LockScreen.lock}>锁屏</li>
        <li onClick={System.WebPC.fullScreen}>进入/退出全屏</li>
      </ul>
    </div>
  )
}