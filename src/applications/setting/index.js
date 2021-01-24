import React, { useEffect } from "react";
import "./style.css"

import AppIcon from "../../components/app-icon"
import Toolbar from "../../components/app-tool-bar"
import zoom from "../../components/app-zoom"

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

  useEffect(() => {
    zoom(Setting.name)
  })

  return (
    <div id="setting" className="application">
      <Toolbar theApp={Setting}/>
    </div>
  );
}

export default Setting;