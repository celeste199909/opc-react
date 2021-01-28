
let actions = {
  appManager: {
    openApp: (theApp) => {
      return {
        type: "ADD_APP",
        app: theApp
      }
    },
    closeApp: (theApp) => {
      return {
        type: "DELETE_APP",
        app: theApp
      }
    },
    minimizeApp: (theApp) => {
      return {
        type: "MINIMIZE_APP",
        app: theApp
      }
    },
    prepositionApp: (appName) => {
      return {
        type: "PREPOSITION_APP",
        appName: appName
      }
    },
    restoreApp: (theApp) => {
      return {
        type: "RESTORE_APP",
        app: theApp
      }
    },
  },
  acountInfo: {
    updateAvatar: (avatar) => {
      return {
        type: "UPSTATE_AVATAR",
        avatar
      }
    },
    updateUsername: (username) => {
      return {
        type: "UPSTATE_USERNAME",
        username
      }
    }
  }
}

export default actions