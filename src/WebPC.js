import Desktop from "./components/desktop"
import StatusBar from "./components/status-bar"
import "./style/reset.css"

function WebPC() {
  return (
    <div id="web-pc">
      <Desktop />
      <StatusBar />
    </div>
  )
}

export default WebPC