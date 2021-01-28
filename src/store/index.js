import { createStore, combineReducers } from "redux"

import appManagerReducer from "./app-manager/reducer"
import acountInfoReducer from "./acount-info/reducer"

let rootReducer = combineReducers({
  appManager: appManagerReducer,
  acountInfo: acountInfoReducer
})

let store = createStore(rootReducer)

export default store