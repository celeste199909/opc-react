import "./style.css"
import { useSelector } from "react-redux"
import { useEffect } from "react"
function LockScreen () {
  let avatar = useSelector(state => state.acountInfo.avatar)



  useEffect(() => {
    let lockScreenEl = document.querySelector("#lock-screen")

    lockScreenEl.addEventListener("keypress", keyEnterToDesktop)

    // 按 Enter 开启全屏模式并进入桌面
    function keyEnterToDesktop (e) {
      if (e.code === "Enter") {
        enterDesktop()
      }
    }
  })
  // 开启全屏模式
  function fullScreen (e) {
    let root = document.querySelector("#root")
    root.requestFullscreen()
  }
  // 进入桌面
  function enterDesktop () {
    let lockScreenEl = document.querySelector("#lock-screen")
    lockScreenEl.className = "unlock"
  }


  return (
    <div id="lock-screen" className="unlock">
      <div className="wrapper">
        <div className="header">
          <div className="lock-screen-avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <input autoFocus="autofocus" type="password" placeholder="按 Enter 开始吧" />
        <div>按 <span onClick={enterDesktop}>[ Enter ]</span> 进入桌面</div>
        <div className="fullscreen-btn" onClick={fullScreen}>开启全屏</div>
      </div>
      <div className="footer">
        <div className="description">a personal computer simulator</div>
        <div>github: <a href="https://github.com/iceream/opc-react" target="_blank" rel="noreferrer">iceream</a></div>
      </div>
    </div>
  )
}

function lock () {
  let lockScreenEl = document.querySelector("#lock-screen")
  lockScreenEl.className = "lock"
}

export default LockScreen
export {
  lock
}