import { hideOrShow } from "../components/status-bar"
import { lock } from "../components/lock-screen"
import { shutdown } from "../components/shutdown"
import { fullScreen } from "../WebPC"

const System = {
  StatusBar: {
    hideOrShow
  },
  LockScreen: {
    lock
  },
  WebPC: {
    fullScreen
  },
  Shutdown: {
    shutdown
  }
}

export default System