import { useState } from "react";
import "./style.css";

import Launchpad from "../../applications/launchpad/index"
import Setting from "../../applications/setting/index"

export default function AppManager() {

  let [allApps] = useState([Launchpad, Setting]);
  // console.log(setAllApp);
  let [openedApps, setOpenedApps] = useState([]);

  function handleClick(theApp) {
    let theAppIsOpened = openedApps.some( o => {
      return o.name === theApp.name;
    })
    if (!theAppIsOpened) {
      openApp(openedApps, theApp)
    } else {
      closeApp(openedApps, theApp)
    }
  }

  function openApp(openedApps, theApp) {
    setOpenedApps([...openedApps, theApp])
  }

  function closeApp(openedApps, theApp) {
    let openedAppsWithoutTheApp = openedApps.filter( o => {
      return o.name !== theApp.name
    })
    setOpenedApps([...openedAppsWithoutTheApp])
  }

  return (
    <div id="app-manager">
        {allApps.map( App => {
          return (
            <App.Icon 
              key={App.Icon.toString()}
              handleClick={(e) => {
                // console.log(App);
                handleClick(App)
              }}
            />
          )
        })}
      {openedApps.map( App => {
          return (
            <App.UI 
              key={App.UI.toString()}
              closeApp={{
                close: closeApp,
                openedApps: openedApps,
                theApp: App
              }}

            />
          )
        })}
    </div>
  )
}