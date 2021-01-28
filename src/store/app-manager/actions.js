// actions fn
function openApp (state, action) {
  // 打开的时候设置旋转动画
  let iconOpen = document.querySelector(`.${action.app.name}`)
  iconOpen.setAttribute("style", "animation: iconRotate 2.5s")
  return {
    ...state,
    openedApps: [...state.openedApps, action.app],
  }
}

function closeApp (state, action) {
  // 关闭的时候删除旋转动画
  let iconClose = document.querySelector(`.${action.app.name}`)
  iconClose.setAttribute("style", "animation: ''")
  return {
    ...state,
    openedApps: state.openedApps.filter(o => o.name !== action.app.name),
  }
}

function minimizeApp (state, action) {
  return {
    ...state,
    minimizeApps: [...state.minimizeApps, action.app],
  }
}

function restoreApp (state, action) {
  return {
    ...state,
    minimizeApps: state.minimizeApps.filter(o => o.name !== action.app.name),
  }
}


export {
  openApp, closeApp, minimizeApp, restoreApp
}