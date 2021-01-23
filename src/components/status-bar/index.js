import { useState } from "react"
import { useSelector } from "react-redux"
import "./style.css"
function StatusBar(props) {

  let openedApps = useSelector( state => state.openedApps)

  // 控制开始菜单的 显示/隐藏
  let [showStartMenu, setShowStartMenu] = useState(false)
  
  return (
    <div id="status-bar">
      <div id="start-menu">
        <div className="btn" onClick={() => {
          setShowStartMenu(!showStartMenu)
        }}>pc</div>
        <div className={"list " + (showStartMenu ? "active" : "")}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
      <ul>
        {openedApps.map((App) => {
          return (
            <li key={App.Icon}>
              <App.Icon />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StatusBar
