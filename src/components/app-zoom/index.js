import "./style.css"

function zoom(appName) {
  let application = document.querySelector(`#${appName}`)
  // bottom
  let bottom = document.createElement("div")
  bottom.className = "bottom"
  application.appendChild(bottom)

  bottom.addEventListener("mousedown", handleMousedownBottom)

  // right
  let right = document.createElement("div")
  right.className = "right"
  application.appendChild(right)

  right.addEventListener("mousedown", handleMousedownRight)

  // listener function
  function handleMousedownBottom(e) {
    let { clientY } = e

    let desktopEl = document.querySelector("#desktop")
    let application = e.target.parentNode
    let { height } = application.getBoundingClientRect();
    
    desktopEl.addEventListener("mousemove", move)

    function move(e) {
      let endClientY = e.clientY
      let distance = endClientY -  clientY
      application.style.height = height + distance + "px";
    }
    desktopEl.addEventListener("mouseup", () => {
      desktopEl.removeEventListener("mousemove", move)
    })
  }

  function handleMousedownRight(e) {
    let { clientX } = e

    let desktopEl = document.querySelector("#desktop")
    let application = e.target.parentNode
    let { width } = application.getBoundingClientRect();
    
    desktopEl.addEventListener("mousemove", move)

    function move(e) {
      let endClientX = e.clientX
      let distance = endClientX -  clientX
      application.style.width = width + distance + "px";
    }

    desktopEl.addEventListener("mouseup", () => {
      desktopEl.removeEventListener("mousemove", move)
    })
  }
}

export default zoom