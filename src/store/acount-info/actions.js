// actions fn
function updateAvatar (state, action) {
  // 更新头像
  return {
    ...state,
    avatar: action.avatar
  }
}

function updateUsername (state, action) {
  // 更新用户名
  return {
    ...state,
    username: action.username
  }
}

export {
  updateAvatar, updateUsername
}