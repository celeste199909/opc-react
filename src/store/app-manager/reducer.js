import { openApp, closeApp, minimizeApp, restoreApp, prepositionApp } from "./actions"

import Music from "../../applications/music"
import Setting from "../../applications/setting"
// import Bibilili from "../../applications/bibilili"

export default function appManagerReducer (state = {
  allApps: [Setting, Music],
  openedApps: [],
  minimizeApps: [],
}, action) {
  switch (action.type) {
    case "ADD_APP":
      return openApp(state, action)
    case "DELETE_APP":
      return closeApp(state, action)
    case "PREPOSITION_APP":
      return prepositionApp(state, action)
    case "MINIMIZE_APP":
      return minimizeApp(state, action)
    case "RESTORE_APP":
      return restoreApp(state, action)
    default:
      return {
        ...state,
      };
  }
}