export const demoMixin = {
  data() {
    return {
      message: "我是 mixin 的data信息",
    }
  },
  methods: {
    mixinTest() {
      this.message = "我是修改之后的 mixin 的 message 信息"
    },
  },
  created() {
    console.log("我是 mixin 中的 Created")
  },
}
