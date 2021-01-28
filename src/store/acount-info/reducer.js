// acountInfoReducer
import defaultAvatar from "../../images/touxiang.jpg"

import { updateAvatar, updateUsername } from "./actions"

export default function acountInfoReducer (state = {
  avatar: defaultAvatar,
  username: "未填写用户名"
}, action) {
  switch (action.type) {
    case "UPDATE_AVATAR":
      return updateAvatar(state, action)
    case "UPDATE_USERNAME":
      return updateUsername(state, action)
    default:
      return {
        ...state,
      };
  }
}