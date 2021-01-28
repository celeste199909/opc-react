import { useEffect } from "react";
import { useDispatch } from "react-redux"

export default function usePrepositionWindow (name) {
  // console.log(name);
  // let openedApps = useSelector(state => state.appManager.openedApps)
  // let newOpenedApps = Array.from(openedApps)

  let dispatch = useDispatch()

  useEffect(() => {
    let app = document.querySelector(`#${name}`)

    function handleClick () {
      // console.log(name, e);

      // console.log("2", openedApps);
      // openedApps.forEach((element, index) => {
      //   if (element.name === name) {
      //     // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
      //     let item = openedApps.splice(index, 1)[0]
      //     // console.log("目标窗口", item);
      //     console.log("删除目标窗口后", openedApps);
      //     openedApps.push(item)
      //     console.log("把目标窗口移动到数组最后", openedApps);
      //   }
      // });

      // for (let i = 0; i < openedApps.length; i++) {
      //   if (openedApps[i].name === name) {
      //     // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
      //     let item = openedApps.splice(i, 1)[0]
      //     // console.log("目标窗口", item);
      //     console.log("删除目标窗口后", openedApps);
      //     openedApps.push(item)
      //     console.log("把目标窗口移动到数组最后", openedApps);
      //   }
      // }
      // console.log(newOpenedApps);
      dispatch({
        type: "PREPOSITION_APP",
        appName: name
      })
    }
    // console.log(openedApps);
    app.addEventListener("click", handleClick)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



}