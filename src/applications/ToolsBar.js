
function ToolsBar(props) {

  function closeWindow() {
    let {openedApps, theApp} = props.closeApp;
    props.closeApp.close(openedApps, theApp);
  }

  function minimizeWindow() {
    console.log("最小化");
  }

  function maximizeWindow() {
    console.log("最大化");
  }

  return (
    <div className="tools-bar">
      <div className="window-name">{props.name}</div>
      <div className="window-operation">
        <div onClick={maximizeWindow}>口</div>
        <div onClick={minimizeWindow}>-</div>
        <div onClick={closeWindow}>X</div>
      </div>
    </div>
  )
}

export default ToolsBar