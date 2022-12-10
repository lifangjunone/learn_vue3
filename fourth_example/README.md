## v-for 中的key是什么作用
> 在使用v-for时，我们通常会给元素或者组件绑定一个key属性

##  认识 VNode
> VNode：Virtual Node 虚拟节点
> Vue中的元素或者组件都是一个个的VNode
> VNode的本质是一个JavaScript对象
> 元素(div)/组件 -> VNode -> 真实DOM
> VNode 最大的好处是：做跨平台

## 虚拟DOM 
> Virtual DOM
- 如果我们不只是一个简单的div，而是有一大推的元素，那么他么应该会形成一个VNode Tree；
- template  -> VNode-> VDOM -> 真实DOM
  
```diff
+ VNode: 元素/组件，就是一个JavaScript对象
+ VDOM： 由一个个的VNode形成的树结构
+ DOM： 真实DOM
```