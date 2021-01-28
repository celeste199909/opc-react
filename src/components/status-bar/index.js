import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import "./style.css"
// 组件
import StartMenu from '../status-bar-start-menu';
import Time from "../status-bar-time"

function StatusBar (props) {

  let openedApps = useSelector(state => state.appManager.openedApps)
  // 状态栏要显示的应用
  let [newOpenedApps, setNewOpenedApps] = useState(null)
  // 当打开app的数量改变时才执行
  let length = openedApps.length
  useEffect(() => {
    setNewOpenedApps(openedApps)
    // console.log("length change");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  // 状态栏的 显示状态
  // let statusIsVisible = useState(true)

  return (
    <div id="status-bar" className="show-status">
      {/* 1.开始菜单 */}
      <StartMenu />
      {/* 2.打开的应用 */}
      <ul id="opened-apps-list">
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
function isVisible () {
  let className = document.querySelector("#status-bar").className
  if (className === "show-status") {
    return true
  } else {
    return false
  }
}
// 隐藏状态栏
function hide () {
  let statusBar = document.querySelector("#status-bar")
  statusBar.className = "hide-status"
}
// 显示状态栏
function show () {
  let statusBar = document.querySelector("#status-bar")
  statusBar.className = "show-status"
}
// 挂载方法
StatusBar.isVisible = isVisible
StatusBar.hide = hide
StatusBar.show = show
export default StatusBar
