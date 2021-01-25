
let actions = {
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
  restoreApp: (theApp) => {
    return {
      type: "RESTORE_APP",
      app: theApp
    }
  },
}

export default actions