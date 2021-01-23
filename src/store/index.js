import {createStore} from "redux"

import Music from "../applications/music"
import Setting from "../applications/setting"

function reducer(state = {
  allApps: [Setting, Music],
  openedApps: [],
  minimizeApps: []
}, action) {
  switch (action.type) {
    case "ADD_APP":
      return {
        allApps: [...state.allApps],
        openedApps: [...state.openedApps, action.app],
        minimizeApps: [...state.minimizeApps]
      }
    case "DELETE_APP":
      return {
        allApps: [...state.allApps],
        openedApps: state.openedApps.filter( o => o.name !== action.app.name),
        minimizeApps: [...state.minimizeApps]
      }
    case "MINIMIZE_APP":
      return {
        allApps: [...state.allApps],
        openedApps: [...state.openedApps],
        minimizeApps: [...state.minimizeApps, action.app]
      }
    case "RESTORE_APP":
      return {
        allApps: [...state.allApps],
        openedApps: [...state.openedApps],
        minimizeApps: state.minimizeApps.filter( o => o.name !== action.app.name)
      }
    default:
      return {
        allApps: [...state.allApps],
        openedApps: [...state.openedApps],
        minimizeApps: [...state.minimizeApps]
      };
  }
}
let store = createStore(reducer)

store.dispatch({
  type: "init",
})

export default store