import React from "react";
import "./style.css"

import ToolsBar from "../ToolsBar"

let Launchpad = {
  name: "Launchpad",
  Icon: LaunchpadIcon,
  UI: LaunchpadUI
}

function LaunchpadIcon(props) {
  return (
    <div className="icon" onClick={props.handleClick}>启动台icon</div>
  );
}
function LaunchpadUI(props) {
  return (
    <div id="launchpad">
      <ToolsBar name={Launchpad.name} closeApp={props.closeApp}/>
    </div>
  );
}

export default Launchpad;