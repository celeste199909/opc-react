import "./style.css"

import { useSelector } from "react-redux"

function Desktop() {

  let allApps = useSelector( state => state.allApps)
  // console.log(allApps);
  let openedApps = useSelector( state => state.openedApps)
  let minimizeApps = useSelector( state => state.minimizeApps)

  // 应该显示 UI 的 app ：openedApps - minimizeApps
 
  let shouldShowUIApps = openedApps.filter((o) => {
    return !minimizeApps.includes(o)
  })

  return (
    <div id="desktop">
        {allApps.map( App => {
          return (
            <App.Icon key={App.Icon.toString()}/>
          )
        })}
      {shouldShowUIApps.map( App => {
          return (
            <App.UI key={App.UI.toString()}/>
          )
        })}
    </div>
  )
}

export default Desktop