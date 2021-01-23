import { useDispatch } from "react-redux"

function ToolsBar(props) {

  let dispatch = useDispatch()
  // console.log(props);
  let {theApp} = props

  function closeWindow() {
    closeApp(theApp)
  }

  function minimizeWindow() {
    theApp.minimizeApp()
  }

  function maximizeWindow() {
    console.log("最大化")
  }

  function closeApp(theApp) {
    dispatch({
      type: "DELETE_APP",
      app: theApp
    })
  }

  return (
    <div className="tools-bar">
      <div className="window-name">{props.theApp.name}</div>
      <div className="window-operation">
        <div onClick={maximizeWindow}>口</div>
        <div onClick={minimizeWindow}>-</div>
        <div onClick={closeWindow}>X</div>
      </div>
    </div>
  )
}

export default ToolsBar