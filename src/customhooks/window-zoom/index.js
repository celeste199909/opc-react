import "./style.css"
import { useState, useEffect } from "react"

function useWindowZoom (appName, options) {

  let { top, right, bottom, left, rightBottom } = options
  // console.log(appName, options);

  const [application, setApplication] = useState(null);

  useEffect(() => {
    let applicationEl = document.querySelector(`#${appName}`)
    setApplication(applicationEl)
  }, [appName]);

  if (!application) {
    return
  }

  if (top) {
    // top
    let topSide = document.createElement("div")
    topSide.className = "top-side"
    application.appendChild(topSide)


    topSide.addEventListener("mousedown", handleMousedownTop)
  }
  if (right) {
    //   // right
    let rightSide = document.createElement("div")
    rightSide.className = "right-side"
    application.appendChild(rightSide)

    rightSide.addEventListener("mousedown", handleMousedownRight)
  }
  if (bottom) {
    // bottom
    let bottomSide = document.createElement("div")
    bottomSide.className = "bottom-side"
    application.appendChild(bottomSide)

    bottomSide.addEventListener("mousedown", handleMousedownBottom)
  }
  if (left) {
    // left
    let leftSide = document.createElement("div")
    leftSide.className = "left-side"
    application.appendChild(leftSide)

    leftSide.addEventListener("mousedown", handleMousedownLeft)
  }
  if (rightBottom) {
    // left
    let rightBottomSide = document.createElement("div")
    rightBottomSide.className = "right-bottom-corner"
    application.appendChild(rightBottomSide)

    rightBottomSide.addEventListener("mousedown", handleMousedownRightBottom)
  }




}
// listener function
// top
function handleMousedownTop (e) {
  let { clientY } = e

  let webpc = document.querySelector("#web-pc")
  let application = e.target.parentNode
  let { height } = application.getBoundingClientRect();

  webpc.addEventListener("mousemove", move)

  function move (e) {
    let endClientY = e.clientY
    let distance = endClientY - clientY
    application.style.height = height - distance + "px";
  }
  webpc.addEventListener("mouseup", () => {
    webpc.removeEventListener("mousemove", move)
  })
}
// bottom
function handleMousedownBottom (e) {
  let { clientY } = e

  let webpc = document.querySelector("#web-pc")
  let application = e.target.parentNode
  let { height } = application.getBoundingClientRect();

  webpc.addEventListener("mousemove", move)

  function move (e) {
    let endClientY = e.clientY
    let distance = endClientY - clientY
    application.style.height = height + distance + "px";
  }
  webpc.addEventListener("mouseup", () => {
    webpc.removeEventListener("mousemove", move)
  })
}
// Left
function handleMousedownLeft (e) {
  let { clientX } = e
  // console.log(e);
  let webpc = document.querySelector("#web-pc")
  let application = e.target.parentNode
  let { width } = application.getBoundingClientRect();

  webpc.addEventListener("mousemove", move)

  function move (e) {
    // console.log("move");
    let endClientX = e.clientX
    let distance = endClientX - clientX
    application.style.width = width - distance + "px";
  }

  webpc.addEventListener("mouseup", () => {
    webpc.removeEventListener("mousemove", move)
  })
}
function handleMousedownRight (e) {
  let { clientX } = e
  // console.log(e);
  let webpc = document.querySelector("#web-pc")
  let application = e.target.parentNode
  let { width } = application.getBoundingClientRect();

  webpc.addEventListener("mousemove", move)

  function move (e) {
    // console.log("move");
    let endClientX = e.clientX
    let distance = endClientX - clientX
    application.style.width = width + distance + "px";
  }

  webpc.addEventListener("mouseup", () => {
    webpc.removeEventListener("mousemove", move)
  })
}

function handleMousedownRightBottom (e) {
  let { clientX } = e
  // console.log(e);
  let webpc = document.querySelector("#web-pc")
  let application = e.target.parentNode
  let { width, height } = application.getBoundingClientRect();

  // 当前窗口 宽高比 
  let proportion = (width / height).toFixed(4)
  console.log(proportion);

  webpc.addEventListener("mousemove", move)

  function move (e) {
    // console.log("move");
    let endClientX = e.clientX
    let distance = endClientX - clientX
    application.style.width = width + distance + "px";
    application.style.height = width / proportion + distance + "px";
  }

  webpc.addEventListener("mouseup", () => {
    webpc.removeEventListener("mousemove", move)
  })
}



export default useWindowZoom