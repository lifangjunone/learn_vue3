// import "./js/element";

import { createApp } from "vue";
import App from "./vue/App"
import axios from 'axios'

import "js/element"

if (module.hot) {
    module.hot.accept("js/element.js", ()=>{
        console.log("element module is updated")
    })
}

// Vue Code

const app = createApp(App);

app.mount("#app");

axios.get("/api")
