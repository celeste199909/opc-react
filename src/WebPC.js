import Desktop from "./components/desktop"
import StatusBar from "./components/status-bar"
import LockScreen from "./components/lock-screen"
import "./static/style/reset.css"

function WebPC () {
  return (
    <div id="web-pc">
      <Desktop />
      <StatusBar />
      <LockScreen />
    </div>
  )
}

function fullScreen () {
  let root = document.querySelector("#root")
  if (!document.fullscreenElement) {
    root.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

export default WebPC
export {
  fullScreen
}