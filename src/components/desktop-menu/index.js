// 右键菜单 暂时仅限桌面

/**
 * 1. 新建文件夹
 * 2. 隐藏状态栏
 * 3. 更改桌面背景
 * 4. 排序方式
 */
import { useEffect, useState } from "react";
import "./style.css"

export default function ContextMenu(params) {

  let [showContextMenu, setShowContextMenu] = useState(false)
  let [style, setStyle] = useState({})
  // let style = {
  //   left: "400px",
  //   top: "500px"
  // }
  useEffect(() => {

    document.addEventListener("contextmenu", (e) => {
      // 阻止默认事件
      e.preventDefault()
    })

    let desktop = document.querySelector("#desktop")

    desktop.addEventListener("contextmenu", handleContextMenu)
    function handleContextMenu(e) {
      if (e.target.id !== "desktop") {
        return;
      }
      console.log(e);
      let {clientX, clientY} = e
      setStyle({
        left: clientX + "px",
        top: clientY + "px"
      })
      setShowContextMenu(!showContextMenu)
    }
    // 如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
    // 在这里清除监听事件
    return function cleanup() {
      desktop.removeEventListener("contextmenu", handleContextMenu)
    };
  })

  
  
  return (
    <div id="context-menu" 
      className={showContextMenu ? "active" : " "}
      style={style}
    >
    <ul>
      <li>新建文件夹</li>
      <li>隐藏状态栏</li>
      <li>更改桌面背景</li>
      <li>排序方式</li>
    </ul>
  </div>
  )
}