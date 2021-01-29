import { useEffect } from "react";
import { useDispatch } from "react-redux"

export default function usePrepositionWindow (name) {

  let dispatch = useDispatch()

  useEffect(() => {
    let app = document.querySelector(`#${name}`)

    function handleClick () {
      dispatch({
        type: "PREPOSITION_APP",
        appName: name
      })
    }
    app.addEventListener("click", handleClick)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}