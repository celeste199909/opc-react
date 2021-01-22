import React from "react";
import "./style.css"

import ToolsBar from "../ToolsBar"

let Setting = {
  name: "Setting",
  Icon: SettingIcon,
  UI: SettingUI
}

function SettingIcon(props) {
  return (
    <div className="icon setting" onClick={props.handleClick}>设置icon</div>
  );
}
function SettingUI(props) {
  return (
    <div id="setting">
      <ToolsBar name={Setting.name} closeApp={props.closeApp}/>
    </div>
  );
}

export default Setting;