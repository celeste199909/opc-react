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
// 窗口前置
function prepositionApp (state, action) {
  let newArr = Array.from(state.openedApps)
  state.openedApps.forEach((element, index) => {
    if (element.name === action.appName) {
      let item = newArr.splice(index, 1)[0]
      newArr.push(item)
    }
  });
  return {
    ...state,
    openedApps: newArr
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
  openApp, closeApp, prepositionApp, minimizeApp, restoreApp
}