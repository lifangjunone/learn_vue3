# learn vue3

learn vue3 + typescript

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
+ View：就是DOM，绑定数据和方法， 渲染data
+ Model：就是对象，提供数据和方法，监听DOM