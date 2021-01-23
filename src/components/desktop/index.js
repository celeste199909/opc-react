import "./style.css"

import { useDispatch, useSelector } from "react-redux"

function Desktop() {

  let allApps = useSelector( state => state.allApps)
  // console.log(allApps);
  let openedApps = useSelector( state => state.openedApps)
  let dispatch = useDispatch()

  function handleClick(theApp) {

    let theAppIsOpened = openedApps.some( o => {
      return o.name === theApp.name;
    })
    if (!theAppIsOpened) {
      openApp(theApp)
    } else {
      closeApp(theApp)
    }
  }

  function openApp(theApp) {
    dispatch({
      type: "ADD_APP",
      app: theApp
    })
  }

  function closeApp(theApp) {
    dispatch({
      type: "DELETE_APP",
      app: theApp
    })
  }

  return (
    <div id="desktop">
        {allApps.map( App => {
          return (
            <App.Icon 
              key={App.Icon.toString()}
              handleClick={(e) => {
                handleClick(App)
              }}
            />
          )
        })}
      {openedApps.map( App => {
          return (
            <App.UI 
              key={App.UI.toString()}
              theApp={{
                ...App,
                close: closeApp
              }}
            />
          )
        })}
    </div>
  )
}

export default Desktop