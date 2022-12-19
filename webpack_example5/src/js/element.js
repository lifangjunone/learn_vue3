import "../css/divEl.css";
import "../font/iconfont.css";

const divEl = document.createElement("div");
const iEl = document.createElement("i");
iEl.className = "iconfont icon-ashbin";

divEl.className = "divEl";
divEl.innerHTML = "Hello World";

document.body.appendChild(divEl);
document.body.appendChild(iEl);
