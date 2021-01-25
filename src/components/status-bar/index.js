import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import "./style.css"
function StatusBar (props) {

  let openedApps = useSelector(state => state.openedApps)

  let [dropCount, setDropCount] = useState([])

  useEffect(() => {
    let statusBar = document.querySelector("#status-bar")
    let { width } = statusBar.getBoundingClientRect()
    let count = Math.floor(width / 50) - 1 - openedApps.length
    setDropCount(Array.from({ length: count }))
  }, [openedApps]);

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
      {openedApps.map((App) => {
        return (
          <div className="status-bar-droppable" key={App.Icon}>
            <App.Icon />
          </div>
        )
      })}
      {dropCount.map((o, index) => {
        return <div className="status-bar-droppable" key={"status-bar-droppable" + index}></div>
      })}
    </div>
  )
}

export default StatusBar
