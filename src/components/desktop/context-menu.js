import { useEffect, useState } from "react";
import "./style/context-menu.css"
import System from "@system-api/index.js"

export default function ContextMenu () {
  // 菜单显示的状态
  let [showContextMenu, setShowContextMenu] = useState(false)
  // 设置菜单出现的位置
  let [style, setStyle] = useState({})
  // 根据点击目标不同显示不同功能的菜单

  useEffect(() => {

    let webpc = document.querySelector("#web-pc")
    let desktop = document.querySelector("#desktop")

    document.addEventListener("contextmenu", (e) => {
      // 阻止默认事件
      e.preventDefault()
    })
    // 给web-pc添加事件：单击隐藏右键菜单
    webpc.addEventListener("click", hideContextMenu)

    function hideContextMenu () {
      setShowContextMenu(false)
    }

    desktop.addEventListener("contextmenu", handleContextMenu)
    // 创建 上下文菜单 （功能 位置）
    function handleContextMenu (e) {
      // let target = e.target
      // if (target.id === "desktop" || target.className === "desktop-droppable") {
      //   setContextMenuList(["桌面功能:", "新建文件夹", "隐藏状态栏", "更改桌面背景", "排序方式"])
      // } else if (target.className.startsWith("app")) {
      //   setContextMenuList(["app功能:", "新建文件夹", "隐藏状态栏", "更改桌面背景", "排序方式"])
      // } else {
      //   return
      // }
      let { clientX, clientY } = e
      setStyle({
        left: clientX + "px",
        top: clientY + "px"
      })
      setShowContextMenu(!showContextMenu)
    }
    // 如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
    // 在这里清除监听事件
    return function cleanup () {
      desktop.removeEventListener("contextmenu", handleContextMenu)
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