import Desktop from "./components/desktop"
import StatusBar from "./components/status-bar"
import LockScreen from "./components/lock-screen"
import "./style/reset.css"

function WebPC () {

  return (
    <div id="web-pc">
      <Desktop />
      <StatusBar />
      <LockScreen />
    </div>
  )
}

export default WebPC