import { useDispatch } from "react-redux"
import "./style.css"
function ToolsBar (props) {

  let dispatch = useDispatch()
  let { theApp } = props

  function closeWindow () {
    dispatch({
      type: "DELETE_APP",
      app: theApp
    })
  }

  function minimizeWindow () {
    document.querySelector(`#${theApp.name}`).classList.add("minimized-app")
    dispatch({
      type: "MINIMIZE_APP",
      app: theApp
    })
  }

  // function maximizeWindow() {
  //   let id = theApp.name
  //   let appWindow = document.querySelector(`#${id}`)
  //   appWindow.style.width = "100%";
  //   appWindow.style.height = "100%";
  //   appWindow.style.left = "0";
  //   appWindow.style.top = "0";
  // }

  // 移动窗口
  function handleDrag (e) {
    // 鼠标 在元素内的坐标
    let { offsetX, offsetY } = e.nativeEvent
    let appWindowEl = e.target.parentNode
    // 把监听事件绑定到 desktop 元素上解决鼠标移动过快元素跟不上的问题
    let desktopEl = document.querySelector("#desktop")
    function move (e) {
      // 鼠标在页面内的坐标
      let { clientX, clientY } = e
      let left = clientX - offsetX
      let top = clientY - offsetY
      appWindowEl.style.left = left + "px"
      appWindowEl.style.top = top + "px"
    }
    desktopEl.addEventListener("mousemove", move)

    desktopEl.addEventListener("mouseup", () => {
      desktopEl.removeEventListener("mousemove", move)
    })

    desktopEl.addEventListener("mouseleave", () => {
      desktopEl.removeEventListener("mousemove", move)
    })
  }

  return (
    <div className="tools-bar"
      onMouseDown={handleDrag}
    >
      <div className="window-name">{theApp.cname}</div>
      <div className="window-operation">
        {/* <div onClick={maximizeWindow}>口</div> */}
        <div className="btn minimize-window" onClick={minimizeWindow}>﹣</div>
        <div className="btn close-window" onClick={closeWindow}>×</div>
      </div>
    </div>
  )
}

export default ToolsBar