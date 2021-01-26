import { createStore } from "redux"

import Music from "../applications/music"
import Setting from "../applications/setting"

function reducer (state = {
  allApps: [Setting, Music],
  openedApps: [],
  minimizeApps: [],
}, action) {
  switch (action.type) {
    case "ADD_APP":
      // 打开的时候设置旋转动画
      let iconOpen = document.querySelector(`.${action.app.name}`)
      iconOpen.setAttribute("style", "animation: iconRotate 2.5s")
      return {
        ...state,
        openedApps: [...state.openedApps, action.app],
      }
    case "DELETE_APP":
      // 关闭的时候删除旋转动画
      let iconClose = document.querySelector(`.${action.app.name}`)
      iconClose.setAttribute("style", "animation: ''")
      return {
        ...state,
        openedApps: state.openedApps.filter(o => o.name !== action.app.name),
      }
    case "MINIMIZE_APP":
      return {
        ...state,
        minimizeApps: [...state.minimizeApps, action.app],
      }
    case "RESTORE_APP":
      // console.log(action.app);

      return {
        ...state,
        minimizeApps: state.minimizeApps.filter(o => o.name !== action.app.name),
      }
    default:
      return {
        ...state,
      };
  }
}
let store = createStore(reducer)

store.dispatch({
  type: "init",
})

export default store