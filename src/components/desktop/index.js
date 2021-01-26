import "./style.css"
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import ContextMenu from "../desktop-menu"

function Desktop () {

  let allApps = useSelector(state => state.allApps)
  // console.log(allApps);
  let openedApps = useSelector(state => state.openedApps)
  let minimizeApps = useSelector(state => state.minimizeApps)

  let [girdCount, setGirdCount] = useState([]);

  // 应该显示 UI 的 app ：openedApps - minimizeApps

  let shouldShowUIApps = openedApps.filter((o) => {
    return !minimizeApps.includes(o)
  })
  useEffect(() => {
    let desktop = document.querySelector("#desktop")
    let { width, height } = desktop.getBoundingClientRect()
    let count = Math.floor(width / 80) * Math.floor(height / 80)
    // 总数减去app数
    count = count - allApps.length
    // console.log(count);
    setGirdCount(Array.from({ length: count }))
  }, [allApps])
  // 窗口大小
  return (
    <div id="desktop">
      {allApps.map(App => {
        return (
          <div className="desktop-droppable"
            key={App.Icon.toString()}
          >
            <App.Icon />
          </div>
        )
      })}
      {/* 创建格子 */}
      {girdCount.map((o, index) => {
        return <div className="desktop-droppable" key={"grid" + index}></div>
      })}
      {}
      {/* 应用窗口 */}
      {shouldShowUIApps.map(App => {
        return (
          <App.UI key={App.UI.toString()} />
        )
      })}
      <ContextMenu />
    </div>
  )
}

export default Desktop