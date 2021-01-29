import { useDispatch } from "react-redux"
import actions from "../../store/actions"

function useOpenApp (App) {
  let dispatch = useDispatch()
  dispatch(actions.appManager.openApp(App))
}

export default useOpenApp