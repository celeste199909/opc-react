import "./style.css"
import {useSelector, useDispatch} from "react-redux"

function AppIcon(props) {

  let {theApp} = props
  let openedApps = useSelector( state => state.openedApps)
  let minimizeApps = useSelector(state => state.minimizeApps)

  // console.log(minimizeApps);

  let dispatch = useDispatch()

  // 是否已经打开
  let theAppIsOpened = openedApps.some( o => {
    return o.name === theApp.name;
  })
  // 是否已经最小化
  let theAppIsMini = minimizeApps.some( o => {
    return o.name === theApp.name;
  })

  function handleClick() {
    if (!theAppIsOpened) {
      openApp(theApp)
    } else {
      // 如果已经打开，则显示|隐藏
      MiniOrRestoreApp(theApp)
    }
  }

  function openApp(theApp) {
    dispatch({
      type: "ADD_APP",
      app: theApp
    })
  }

  function MiniOrRestoreApp(theApp) {
    if (!theAppIsMini) {
      dispatch({
        type: "MINIMIZE_APP",
        app: theApp
      })
    } else {
      dispatch({
        type: "RESTORE_APP",
        app: theApp
      })
    }
  }

  return (
    <div className={"app-icon " + theApp.name} onClick={handleClick}>
      {theApp.name}
    </div>
  )
}

export default AppIcon