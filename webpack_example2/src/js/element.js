// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/image.css"


import imgObj from "../img/2.jpg"

const divEl = document.createElement("div")

divEl.className = "title"
divEl.innerHTML = "你好啊 webpack"

const bgDiv = document.createElement("div")
bgDiv.className = "image-bg"


const imgEL = document.createElement("img")
imgEL.src = imgObj


document.body.appendChild(divEl)
document.body.appendChild(bgDiv)
document.body.appendChild(imgEL)