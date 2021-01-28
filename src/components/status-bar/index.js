import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import "./style.css"
// 组件
import StartMenu from '../status-bar-start-menu';
import Time from "../status-bar-time"

function StatusBar (props) {

  let openedApps = useSelector(state => state.appManager.openedApps)

  let [newOpenedApps, setNewOpenedApps] = useState(null)
  // setOpenedAppsLength(openedApps.length)
  // 当打开app的数量改变时才执行
  let length = openedApps.length
  useEffect(() => {
    setNewOpenedApps(openedApps)
    // console.log("length change");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  return (
    <div id="status-bar">
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

export default StatusBar
