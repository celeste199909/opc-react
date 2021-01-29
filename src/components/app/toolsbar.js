import { useDispatch } from "react-redux"
import { useState } from "react"
import "./style/toolsbar.css"
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

  let [isMaximized, setIsMaximized] = useState(false)
  let [width, setWidth] = useState(0)
  let [height, setHeight] = useState(0)
  let [left, setLeft] = useState(0)
  let [top, setTop] = useState(0)

  function handleMaximizeWindow (e) {
    setIsMaximized(!isMaximized)

    let id = theApp.name
    let appWindow = document.querySelector(`#${id}`)

    setWidth(appWindow.getBoundingClientRect().width)
    setHeight(appWindow.getBoundingClientRect().height)
    setLeft(appWindow.getBoundingClientRect().left)
    setTop(appWindow.getBoundingClientRect().top)

    if (!isMaximized) {
      appWindow.style.width = "100%";
      appWindow.style.height = "100%";
      appWindow.style.left = "0";
      appWindow.style.top = "0";
      appWindow.style.borderRadius = 0

    } else {
      appWindow.style.width = width + "px";
      appWindow.style.height = height + "px";
      appWindow.style.left = left + "px";
      appWindow.style.top = top + "px";
      appWindow.style.borderRadius = 6 + "px"
    }

  }

  // 移动窗口
  function handleDrag (e) {
    if (isMaximized) {
      return
    }
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
        <div className="btn minimize-window" onClick={minimizeWindow}>﹣</div>
        <div className="btn maximize-window"
          onClick={handleMaximizeWindow.bind(this)}>{isMaximized ? "▣" : "□"}</div>
        <div className="btn close-window" onClick={closeWindow}>×</div>
      </div>
    </div>
  )
}

export default ToolsBar