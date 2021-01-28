import "./style.css"
import { useSelector, useDispatch } from "react-redux"

import actions from "../../store/actions"
import useDragDropIcon from "../../customhooks/drap-drop-icon"

function AppIcon (props) {
  // 处理应用图标拖动
  let dragDropIcon = useDragDropIcon

  let { theApp } = props
  let openedApps = useSelector(state => state.appManager.openedApps)
  let minimizeApps = useSelector(state => state.appManager.minimizeApps)
  // 打开但不是 最小化
  // const openNotMini = openedApps.filter(x => !minimizeApps.find(y => y.name === x.name));
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
  function handleCilickAppIcon (e) {
    if (e.target.parentNode.parentNode.id === "desktop") {
      return
    }
    // 没有打开
    if (!theAppIsOpened) {
      dispatch(actions.appManager.openApp(theApp))
    } else {
      // 如果已经打开
      // 但是不是最前面的窗口，
      if (openedApps && openedApps[openedApps.length - 1].name !== theApp.name) {
        // 如果不是最小化的窗口 则移动到最前面
        dispatch(actions.appManager.prepositionApp(theApp.name))
        // if (openNotMini && openNotMini[openNotMini.length - 1].name !== theApp.name) {
        // } 
        // 如果已经打开并且 是最前面的窗口，则显示|隐藏
      } else {
        MiniOrRestoreApp(theApp)
      }
    }
  }
  // 2.在桌面上双击击打开应用
  function handleDoubleCilick (e) {
    if (e.target.parentNode.parentNode.id !== "desktop") {
      return
    }
    if (!theAppIsOpened) {
      dispatch(actions.appManager.openApp(theApp))
    } else {
      // 如果已经打开，则显示|隐藏
      MiniOrRestoreApp(theApp)
    }
  }

  function MiniOrRestoreApp (theApp) {
    if (!theAppIsMini) {
      dispatch(actions.appManager.minimizeApp(theApp))
      document.querySelector(`#${theApp.name}`).classList.add("minimized-app")

    } else {
      dispatch(actions.appManager.restoreApp(theApp))
      document.querySelector(`#${theApp.name}`).className = "application normal"
    }
  }

  return (
    <img
      className={"app-icon " + theApp.name}
      onClick={handleCilickAppIcon}
      onDoubleClick={handleDoubleCilick}
      onMouseDown={dragDropIcon}
      draggable={true}
      src={theApp.iconImg} alt={theApp.cname} />
  )
}

export default AppIcon