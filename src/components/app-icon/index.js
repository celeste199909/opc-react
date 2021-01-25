import "./style.css"
import { useSelector, useDispatch } from "react-redux"

import actions from "../../store/actions"
import dndIcon from "../../libs/dndIcon"

function AppIcon (props) {

  let { theApp } = props
  let openedApps = useSelector(state => state.openedApps)
  let minimizeApps = useSelector(state => state.minimizeApps)

  let dispatch = useDispatch()

  // 是否已经打开
  let theAppIsOpened = openedApps.some(o => {
    return o.name === theApp.name;
  })
  // 是否已经最小化
  let theAppIsMini = minimizeApps.some(o => {
    return o.name === theApp.name;
  })
  // 打开应用
  // 1.不在桌面上（在底部状态栏）单击打开应用
  function handleCilick (e) {
    if (e.target.parentNode.parentNode.id === "desktop") {
      return
    }
    if (!theAppIsOpened) {
      dispatch(actions.openApp(theApp))
    } else {
      // 如果已经打开，则显示|隐藏
      MiniOrRestoreApp(theApp)
    }
  }
  // 2.在桌面上双击击打开应用
  function handleDoubleCilick (e) {
    if (e.target.parentNode.parentNode.id !== "desktop") {
      return
    }
    if (!theAppIsOpened) {
      dispatch(actions.openApp(theApp))
    } else {
      // 如果已经打开，则显示|隐藏
      MiniOrRestoreApp(theApp)
    }
  }
  // 处理应用图标拖动


  function MiniOrRestoreApp (theApp) {
    if (!theAppIsMini) {
      dispatch(actions.minimizeApp(theApp))
    } else {
      dispatch(actions.restoreApp(theApp))
    }
  }

  return (
    <div className={"app-icon " + theApp.name}
      onClick={handleCilick}
      onDoubleClick={handleDoubleCilick}
      onMouseDown={dndIcon}
      draggable="true"
    >
      {theApp.name}
    </div>
  )
}

export default AppIcon