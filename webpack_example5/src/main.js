import "./js/element";

import { createApp } from "vue/dist/vue.esm-bundler";

// Vue Code

const app = createApp({
  template: `<h2>我是Vue渲染出来的</h2>`,
  data() {
    return {
      title: "Vue title",
    };
  },
});

app.mount("#app");
