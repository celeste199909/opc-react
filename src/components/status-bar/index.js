// import { useEffect } from "react"
import { useSelector } from "react-redux"
import "./style.css"
// 组件
import StartMenu from '../status-bar-start-menu';
import Time from "../status-bar-time"

function StatusBar (props) {

  let openedApps = useSelector(state => state.openedApps)

  return (
    <div id="status-bar">
      {/* 1.开始菜单 */}
      <StartMenu />
      {/* 2.打开的应用 */}
      <ul id="opened-apps-list">
        {openedApps.map((App) => {
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

export default StatusBar
