import "./style.css"

function ToolTip (options) {
  let webpc = document.querySelector("#web-pc")

  let tooltip = document.createElement("div")
  tooltip.id = "tooltip"
  tooltip.className = options.type
  tooltip.innerHTML = options.message
  webpc.appendChild(tooltip)

  setTimeout(() => {
    webpc.removeChild(tooltip)
  }, 2000)
}

export default ToolTip