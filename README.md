# learn vue3

vue3 + typescript

## 申明式和命令式

```text
命令式编程关注的是“how to do”
声明式编程关注的是“what to do” 由框架来完成 how 的过程
```

### 原生
+ 我们每完成一个操作，都需要通过javascript编写一条代码，来给浏览器一个指令；
+ 这样的编写代码的过程，我们称之为`命令式编程`;
+ 在早起的原生javascript和jQuery开发的过程中，我们都是通过这种命令的方式编写代码的；
### Vue
- 我们会在`createApp传入的对象中生命需要的内容，模板template，数据data，方法methods`;
- 这样的编写代码的过程， 我们称之为`声明式编程`;
- 目前Vue，React，Angular的编程模式，我们称之为`声明式编程`；

## 架构模型
### MVC 模型
```text
MVC 是Model-View-Controller的简称
```
### MVVM 模型
```text
MVC 是Model-View-ViewModel的简称
```
### MVVM模型说明：
+ View：就是DOM，`绑定`数据和方法， `渲染data`
+ Model：就是对象，`提供`数据和方法，`监听DOM`

## template属性
```text
Vue提供了两种方式使用template
在createApp的对象中，我们需要传入的template以`#`开头，如果字符串是以`#`开始，那么它将被用作 `#`querySelector，并且使用匹配元素的 `#innerHTML`作为模板字符串
```

+ 方式一：使用scripte标签，并且标记他的类型为 `x-template`
+ 方式二：使用任意标签（通常使用template标签，因为不会被浏览器渲染），设置ID；
  + template元素是一种用于保存客户端内容的机制，该内容在加载页面时不会被呈现，但随后可以在运行时使用javascripte实例化；   

## data 属性
```text
data 属性是传入的一个函数，并且该函数需要返回一个对象；
data 中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理
```
+ 在Vue2.x的时候，也可以传入一个对象（虽然官方推荐是一个函数）
+ 在Vue3.x的时候，必须传入一个函数，否则就会直接在浏览器中报错

## methods 属性
```text
methods 属性是一个对象，通常我们会在这个对象中定义很多方法
```
+ 这些方法可以被绑定到template模板中；
+ 在该方法中，我们可以使用`this`关键字来直接访问到data中返回的对象的属性