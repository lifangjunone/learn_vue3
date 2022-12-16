// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/image.css"

const divEl = document.createElement("div")

divEl.className = "title"
divEl.innerHTML = "你好啊 webpack"

const bgDiv = document.createElement("div")
bgDiv.className = "image-bg"


document.body.appendChild(divEl)
document.body.appendChild(bgDiv)