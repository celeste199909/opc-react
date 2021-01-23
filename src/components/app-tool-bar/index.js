import { useDispatch } from "react-redux"
import "./style.css"
function ToolsBar(props) {

  let dispatch = useDispatch()
  let {theApp} = props

  function closeWindow() {
    dispatch({
      type: "DELETE_APP",
      app: theApp
    })
  }

  function minimizeWindow() {
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

  return (
    <div className="tools-bar">
      <div className="window-name">{theApp.name}</div>
      <div className="window-operation">
        {/* <div onClick={maximizeWindow}>口</div> */}
        <div onClick={minimizeWindow}>-</div>
        <div onClick={closeWindow}>X</div>
      </div>
    </div>
  )
}

export default ToolsBar