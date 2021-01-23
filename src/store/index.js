import {createStore} from "redux"

import Music from "../applications/music"
import Setting from "../applications/setting"

function reducer(state = {
  allApps: [Setting, Music],
  openedApps: [],
  minimizeApps: [],
}, action) {
  switch (action.type) {
    case "ADD_APP":
      return {
        ...state,
        openedApps: [...state.openedApps, action.app],
      }
    case "DELETE_APP":
      return {
        ...state,
        openedApps: state.openedApps.filter( o => o.name !== action.app.name),
      }
    case "MINIMIZE_APP":
      return {
        ...state,
        minimizeApps: [...state.minimizeApps, action.app],
      }
    case "RESTORE_APP":
      return {
        ...state,
        minimizeApps: state.minimizeApps.filter( o => o.name !== action.app.name),
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