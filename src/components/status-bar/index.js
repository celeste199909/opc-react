import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import "./style/status-bar.css"
// 组件
import StartMenu from './start-menu';
import Time from "./time"

function StatusBar () {

  let openedApps = useSelector(state => state.appManager.openedApps)
  // 状态栏要显示的应用
  let [newOpenedApps, setNewOpenedApps] = useState(null)
  // 当打开app的数量改变时才执行
  let length = openedApps.length
  useEffect(() => {
    setNewOpenedApps(openedApps)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  return (
    <div id="status-bar" className="show-status">
      {/* 1.开始菜单 */}
      <StartMenu />
      {/* 2.打开的应用 */}
      <ul id="status-bar-opened-apps-list">
        {newOpenedApps && newOpenedApps.map((App) => {
          return (
            <li key={"statubar-icon" + App.name}>
              <App.Icon />
            </li>
          )
        })}
      </ul>
      {/* 3.时间 */}
      <Time />
    </div>
  )
}

// 状态栏状态 显示 | 隐藏
function hideOrShow () {
  let statusBar = document.querySelector("#status-bar")
  if (statusBar.className === "show-status") {
    statusBar.className = "hide-status"
  } else {
    statusBar.className = "show-status"
  }
}

export default StatusBar
export {
  hideOrShow
}
