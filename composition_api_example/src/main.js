import { createApp } from "vue"
import App from "./01_composition_api/App.vue"

const app = createApp(App)
// app.mixin({
//   data() {
//     return {
//       globalInfo: "global info !!! ",
//     }
//   },
//   created() {
//     console.log("global created called")
//   },
// })
app.mount("#app")
