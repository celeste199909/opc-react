import React from "react";
import "./style.css"

import AppIcon from "../../components/app-icon"
import Toolbar from "../../components/app-tool-bar"

let Setting = {
  name: "setting",
  version: "1.0.0",
  Icon: SettingIcon,
  UI: SettingUI
}

function SettingIcon(props) {
  return (
    <AppIcon theApp={Setting}/>
  );
}

function SettingUI(props) {
  return (
    <div id="setting" className="application">
      <Toolbar theApp={Setting}/>
    </div>
  );
}

export default Setting;