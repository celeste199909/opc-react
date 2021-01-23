import { useSelector } from "react-redux"
import "./style.css"
function StatusBar(props) {

  let openedApps = useSelector( state => state.openedApps)
  
  return (
    <div id="status-bar">
      <div id="start-menu">web-pc</div>
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
