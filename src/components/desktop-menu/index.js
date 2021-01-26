// 右键菜单 暂时仅限桌面

/**
 * 1. 新建文件夹
 * 2. 隐藏状态栏
 * 3. 更改桌面背景
 * 4. 排序方式
 */
import { useEffect, useState } from "react";
import "./style.css"

export default function ContextMenu (params) {
  // 菜单显示的状态
  let [showContextMenu, setShowContextMenu] = useState(false)
  // 设置菜单出现的位置
  let [style, setStyle] = useState({})
  // 根据点击目标不同显示不同功能的菜单
  let [contextMenuList, setContextMenuList] = useState([]);

  useEffect(() => {

    document.addEventListener("contextmenu", (e) => {
      // 阻止默认事件
      e.preventDefault()
    })

    let desktop = document.querySelector("#desktop")

    desktop.addEventListener("contextmenu", handleContextMenu)
    function handleContextMenu (e) {
      // console.log(typeof e.target.className);
      let target = e.target
      if (target.id === "desktop" || target.className === "desktop-droppable") {
        // console.log("normal");
        setContextMenuList(["桌面功能:", "新建文件夹", "隐藏状态栏", "更改桌面背景", "排序方式"])
      } else if (target.className.startsWith("app")) {
        setContextMenuList(["app功能:", "新建文件夹", "隐藏状态栏", "更改桌面背景", "排序方式"])
      } else {
        return
      }
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
    };
  })

  return (
    <div id="context-menu"
      className={showContextMenu ? "active" : " "}
      style={style}
    >
      <ul>
        {contextMenuList.map((o) => {
          return <li key={o}>{o}</li>
        })}
      </ul>
    </div>
  )
}