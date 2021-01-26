import { useState } from "react"
import { useSelector } from "react-redux"
import "./style.css"

import startIcon from "../../images/applications/startup.png"
function StatusBar (props) {

  let openedApps = useSelector(state => state.openedApps)


  // useEffect(() => {
  //   let statusBar = document.querySelector("#status-bar")
  //   let { width } = statusBar.getBoundingClientRect()
  //   let count = Math.floor(width / 50) - 1 - openedApps.length
  //   setDropCount(Array.from({ length: count }))
  // }, [openedApps]);

  // 控制开始菜单的 显示/隐藏
  let [showStartMenu, setShowStartMenu] = useState(false)

  return (
    <div id="status-bar">
      <div id="start-menu">
        <div className="start-btn" onClick={() => {
          setShowStartMenu(!showStartMenu)
        }}><img src={startIcon} alt="start" draggable="false" /></div>
        <div className={"list " + (showStartMenu ? "active" : "unactive")}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <ul id="opened-apps-list">
        {openedApps.map((App) => {
          return (
            <li key={"statubar-icon" + App.name}>
              <App.Icon />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StatusBar
