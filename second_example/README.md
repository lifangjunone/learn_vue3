## 指令
### v-once
> v-once 用于指定元素或者组件只渲染一次
+ 当数据发生变化时，元素或者组件以及其所有的子元素将视为静态内容并且跳过；
+ 该指令可以用于性能优化；
+ 如果是子节点，也是只会渲染一次

### v-text
> 用于更新元素的 textContent
```javascript
<span v-text="msg"></span> 等价于 <span>{{msg}}</span>
```

### v-html
> 默认情况下，如果我们展示的内容本身是html，那么vue并不会对其进行特殊的解析
+ 如果我们希望这个内容被Vue可以解析出来，那么可以使用v-html来进行渲染展示

### v-pre
> v-pre用于跳过元素和他的子元素的编译过程，显示原始的Mustache标签；
+ 跳过不需要编译的节点，加快编译的速度；

### v-cloak
> 这个指令保持在元素上直到关联组件实例结束编译
+ 和CSS规则如【v-cloak】{display:none} 一起用时，这个指令可以隐藏未编译的Mustache标签直到组件实例准备完毕。

### v-bind
+ 前端讲的一系列指令，主要是将值传入到模板内容中
+ 但是，除了内容需要动态来决定外，某些属性我们也希望动态来绑定。
    + 比如动态绑定a元素的href属性；
    + 比如动态绑定img元素的src属性；
+ 绑定属性我们使用v-bind
    + 缩写：：
    + 预期：any（with argument）｜ Object（with argument）
    + 参数：attrOrProp（optional）
    + 修饰符：.camel-将kebab-case attribut名转换为camelCase
    + 用法：动态的绑定一个或者多个attribute，或一个组件prop到表达式。
+ 绑定style
    + 我们可以利用v-bind来绑定一些CSS内联样式；
    + 这次因为某些样式我们需要根据数据动态来决定；
    + 比如某段文字的颜色，大小等；