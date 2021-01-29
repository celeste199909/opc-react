import { hideOrShow } from "../components/status-bar"
import { lock } from "../components/lock-screen"
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
  }
}

export default System