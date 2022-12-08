## template 元素
+ 因为 v-if 是一个指令，所以必须将其添加到一个元素上；
    + 但是如果我们希望切换的是多个元素呢？
    + 此时我么渲染div，但是我们并不希望div这种元素被渲染；
    + 这个时候，我们可以选择使用 template；
+ template 元素可以当作不可见的元素，并且在 v-if上使用，但是最终template不会被渲染出来；
    + 有点类似于小程序中的 block

## v-show 和 v-if 区别
+ v-if 为false 时不会被解析渲染，即懒加载
    + <!-- v-if -->
+ v-show 为false， 依然会被解析渲染 
    + <h2 style="display: none;">哈哈哈</h2>
+ v-show 不支持 template
+ v-show 不可以和 v-else 一起使用
+ v-show 本质上是否显示是通过 CSS 的 display 属性来进行切换的，实则他是经过 DOM 渲染的
+ v-if 当条件为false 时， 其压根就不会被DOM进行渲染

## v-show和v-if如何选择
+ 如果我们的元素需要在显示和隐藏之间频繁的切换， 那么使用 v-show
+ 如果我们的元素不会发生频繁的切换，那么使用 v-if