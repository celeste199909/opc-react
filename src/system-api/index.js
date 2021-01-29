import StatusBar from "../components/status-bar"
import LockScreen from "../components/lock-screen"

const System = {
  StatusBar: {
    hideOrShow: StatusBar.hideOrShow
  },
  LockScreen: {
    lock: LockScreen.lock
  }
}

export default System