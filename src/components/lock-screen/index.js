import "./style.css"
import { useSelector } from "react-redux"
import { useEffect } from "react"
function LockScreen (params) {
  let avatar = useSelector(state => state.acountInfo.avatar)


  useEffect(() => {
    let root = document.querySelector("#root")
    let lockScreenEl = document.querySelector("#lock-screen")


    lockScreenEl.addEventListener("keypress", spaceTofullScreen)
    lockScreenEl.addEventListener("keypress", fullScreenEnterDesktop)
    // 按空格开启全屏模式
    function spaceTofullScreen (e) {
      if (e.code === "Space") {
        root.requestFullscreen()
      }
    }

    // 按 Enter 开启全屏模式并进入桌面
    function fullScreenEnterDesktop (e) {
      if (e.code === "Enter") {
        lockScreenEl.className = "unlock"
      }
    }
  })

  return (
    <div id="lock-screen" className="unlock">
      <div className="wrapper">
        <div className="header">
          <div className="lock-screen-avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <input autoFocus="autofocus" type="password" placeholder="按 Enter 开始吧" />
        <div>按 <span>[ Enter ]</span> 进入桌面</div>
        <div>按 <span>[ 空格 ]</span> 开启全屏</div>
      </div>
      <div className="footer">
        <div className="description">A personal computer simulator</div>
        <div>created by <a href="https://github.com/iceream/opc-react" target="_blank" rel="noreferrer">iceream</a></div>
      </div>
    </div>
  )
}

function lock () {
  let lockScreenEl = document.querySelector("#lock-screen")
  lockScreenEl.className = "lock"
}
LockScreen.lock = lock
export default LockScreen